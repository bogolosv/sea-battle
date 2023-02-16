import React, { FC } from 'react';
import classes from './styles/index.module.scss';
import { SeaBattleRow } from "../SeaBattleRow";
import { useSeaBattleContext } from "../../providers/SeaBattleProvider/SeaBattleProvider";
import { columns } from "./const";

export const SeaBattleTable: FC = () => {
    const { table } = useSeaBattleContext();

    return (
        <div className={classes.table}>
            <SeaBattleRow row={columns} rowIndex={-1}/>
            {table.map((row, index) => <SeaBattleRow key={index} row={row} rowIndex={index + 1}/>)}
        </div>
    );
}