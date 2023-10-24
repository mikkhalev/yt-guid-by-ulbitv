import React from 'react';
import classes from './textarea.module.css'
const Textarea = (props:any) => {
    return (
        <textarea {...props} className={classes.textarea}>

        </textarea>
    );
};

export default Textarea;