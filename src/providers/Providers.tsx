import React, { FC, ReactNode } from 'react'
import { SeaBattleProvider } from "./SeaBattleProvider";

type ProvidersType = {
    children: ReactNode;
}

export const Providers: FC<ProvidersType> = ({ children }) => {
    return (
        <SeaBattleProvider>
            {children}
        </SeaBattleProvider>
    );
};