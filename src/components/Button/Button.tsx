import React, { FC, ReactNode } from 'react';
import classes from './styles/index.module.scss';

type ButtonType = {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    style?:  React.CSSProperties;
}

export const Button: FC<ButtonType> = (
    {
        type = 'button',
        children,
        onClick,
        style,
    }
) => {
    return (
        <button className={classes.button} onClick={onClick} type={type} style={style}>
            {children}
        </button>
    );
}