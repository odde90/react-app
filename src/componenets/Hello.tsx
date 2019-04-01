import React, { CSSProperties } from "react";

interface Props {
    compiler: string;
    framework:string;
}

export default function Hello(props: Props){
    return (
        
        <h1 style={centeredContenet}>Hello from {props.compiler} and {props.framework}</h1>
        
    );
}

export const centeredContenet: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 0,
    background: 'black',
    color: 'white'
};

