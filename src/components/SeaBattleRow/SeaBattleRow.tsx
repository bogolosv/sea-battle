import React, { FC } from 'react';
import classes from './styles/index.module.scss';
import { SeaBattleCell } from "../SeaBattleCell";
import { TableCellType } from "../../types/seaBattleTypes";
import { useSeaBattleContext } from "../../providers/SeaBattleProvider/SeaBattleProvider";

type SeaBattleRowType = {
    row: TableCellType[];
    rowIndex: number;
}

export const SeaBattleRow: FC<SeaBattleRowType> = ({ row, rowIndex}) => {
    const { table, setTable } = useSeaBattleContext();

    return (
        <div className={classes.row}>
            <SeaBattleCell content={rowIndex > 0 ? rowIndex.toString() : ''} status={'disabled'}/>
            {row.map((cell, columnIndex) => {
                const handleClick = () => {
                    if(cell.status === 'exist'){
                        const newTable = structuredClone(table)
                        newTable[rowIndex - 1][columnIndex].status = 'destroyed'
                        setTable(newTable);
                    }
                    if(cell.status === 'void'){
                        const newTable = structuredClone(table)
                        newTable[rowIndex - 1][columnIndex].status = 'empty'
                        setTable(newTable);
                    }
                }
                return (
                    <SeaBattleCell key={columnIndex} {...cell} onClick={handleClick}/>
                )
            })}
        </div>
    );
}