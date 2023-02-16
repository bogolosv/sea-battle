import React, { FC } from 'react';
import classes from './styles/index.module.scss';
import { TableCellType } from "../../types/seaBattleTypes";
import classNames from "classnames";

type SeaBattleCellType = TableCellType & {
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

export const SeaBattleCell: FC<SeaBattleCellType> = (
    {
        content ,
        status,
        top,
        bottom,
        left,
        right,
        onClick,
    }
) => {
    const shipClasses = status !== 'void' ? classNames({
        [classes.ship]: true,
        [classes.ship_bottom]: !bottom && top,
        [classes.ship_top]: !top && bottom,
        [classes.ship_left]: !left && right,
        [classes.ship_right]: !right && left,
        [classes.ship_center]: !top && !bottom && !left && !right,
        [classes.ship_leftRight]: right && left,
        [classes.ship_topBottom]: top && bottom,
        [classes.ship_destroyed]: status === 'destroyed'
    }) : undefined;

    const cellClasses = classNames({
        [classes.cell]: true,
        [classes.cell_clickable]: status === 'void' || status === "exist"
    })

    return (
        <span className={cellClasses} onClick={onClick}>
            {(status === 'exist' || status === "destroyed") && (
                <div className={shipClasses}/>
            )}
            {content}
            {status === 'empty' && "●"}
        </span>
    );
}