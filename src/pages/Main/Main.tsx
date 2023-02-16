import React, { FC } from 'react'
import { SeaBattleTable } from "../../components/SeaBattleTable";
import { Button } from "../../components/Button";
import { useSeaBattleContext } from "../../providers/SeaBattleProvider/SeaBattleProvider";
import classes from './styles/index.module.scss';

export const Main: FC = () => {
    const { updateTable } = useSeaBattleContext();
    return (
        <div className={classes.container}>
            <Button onClick={updateTable}>Update</Button>
            <SeaBattleTable/>
        </div>
    );
};