import React from "react";

export type TableType = TableCellType[][];

export type TableCellStatusType = 'void' | 'exist' | 'destroyed' | 'disabled' | 'empty';

export type TableCellType = {
    status: TableCellStatusType;
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    content?: React.ReactNode;
}

export enum ShipDirection {
    Horizontal,
    Vertical
}