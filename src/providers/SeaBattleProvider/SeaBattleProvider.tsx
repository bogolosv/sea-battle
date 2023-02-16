import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import {generateSeaBattleTable} from "../../utils/generateSeaBattleTable";
import {TableType} from "../../types/seaBattleTypes";

type SeaBattleTypeValue = {
    table: TableType,
    setTable: React.Dispatch<React.SetStateAction<TableType>>,
    updateTable: () => void;
}

const SeaBattleContext = createContext(undefined as unknown as SeaBattleTypeValue);

export function useSeaBattleContext () {
    return useContext(SeaBattleContext);
}

type SeaBattleProviderType = {
    children: ReactNode;
}

export const SeaBattleProvider: FC<SeaBattleProviderType> = ({ children }) => {
    const [table, setTable] = useState(generateSeaBattleTable());

    const updateTable = () => {
        setTable(generateSeaBattleTable());
    };

    return (
        <SeaBattleContext.Provider value={{table, setTable, updateTable}}>
            {children}
        </SeaBattleContext.Provider>
    );
}