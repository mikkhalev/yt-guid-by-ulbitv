import React from 'react';
import classes from './input.module.css'
const Input = (props:any, {onChange}:any) => {
    return (
        <input {...props} className={classes.input}/>
    );
};

export default Input;