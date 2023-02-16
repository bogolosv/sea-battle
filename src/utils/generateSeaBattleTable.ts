import { randomInteger } from "./randomInteger";
import { ShipDirection, TableType } from "../types/seaBattleTypes";

export const generateSeaBattleTable = () => {
    const width = 10;
    const height = 10;
    const ships = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

    const table: TableType = [];

    for (let i = 0; i < height; i++) {
        table.push([]);
        for (let j = 0; j < width; j ++) {
            table[i].push({status: "void"});
        }
    }

    ships.map(ship => {
        do {
            const direction = getShipDirection();
            const cell = direction === ShipDirection.Horizontal
                ? randomCell(width - ship + 1, height)
                : randomCell(width, height - ship + 1);
            const shipData = {
                table, startCell: cell, size: ship, direction
            }

            if(checkCompatibility(shipData)){
                wrightInTable(shipData);
                return 0;
            }
        } while (true);
    })
    return table;
}

const randomCell = (width: number, heigth: number) => ({ x: randomInteger(0, width), y: randomInteger(0, heigth) });

const getShipDirection = (): ShipDirection => randomInteger(0, 2);

const checkCompatibility = (
    {table, startCell, direction, size} : {
        table: TableType, startCell: {x: number, y: number}, direction: ShipDirection, size: number
    }) => {
    const start = {
        x: startCell.x - 1 < 0 ? 0 : startCell.x - 1,
        y: startCell.y - 1 < 0 ? 0 : startCell.y - 1,
    };
    const finish = direction === ShipDirection.Horizontal ? {
        x: startCell.x + size === table[0].length ? table[0].length - 1 : startCell.x + size,
        y: startCell.y + 1 === table.length ? table.length - 1 : startCell.y + 1,
    } : {
        x: startCell.x + 1 === table[0].length ? table[0].length - 1 : startCell.x + 1,
        y: startCell.y + size === table.length ? table.length - 1 : startCell.y + size,
    };
    for(let i = start.y; i <= finish.y; i++){
        for (let j = start.x; j<= finish.x; j++){
            if(table[i][j].status !== 'void'){
                return false;
            }
        }
    }
    return true;
}

const wrightInTable = ({
    table, size, direction, startCell
} : {table: TableType, startCell: {x: number, y: number}, direction: ShipDirection, size: number}) => {
    for (let i = 0; i < size; i++){
        if(direction === ShipDirection.Horizontal) {
            table[startCell.y][startCell.x + i].status = 'exist';
            if(size > 1) {
                if(i === 0){
                    table[startCell.y][startCell.x + i].right = true;
                }
                if(i === size - 1){
                    table[startCell.y][startCell.x + i].left = true;
                }
                if(i !== size - 1 && i !== 0){
                    table[startCell.y][startCell.x + i].left = true;
                    table[startCell.y][startCell.x + i].right = true;
                }
            }
        }
        if(direction === ShipDirection.Vertical) {
            table[startCell.y + i][startCell.x].status = 'exist';
            if(size > 1) {
                if(i === 0){
                    table[startCell.y + i][startCell.x].bottom = true;
                }
                if(i === size - 1){
                    table[startCell.y + i][startCell.x].top = true;
                }
                if(i !== size - 1 && i !== 0){
                    table[startCell.y + i][startCell.x].top = true;
                    table[startCell.y + i][startCell.x].bottom = true;
                }
            }
        }
    }
}