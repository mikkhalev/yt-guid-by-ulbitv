import React from 'react';
import classes from './pagination.module.css'
import Button from "../button/button";
const Pagin = (props:any) => {
    return (
        <div className={classes.wrapper}>
            {
                props.pages.map( (item:number, index:number) => {
                    if (props.current === index+1) {
                        return (
                            <Button
                                key={index}
                                disabled
                            >
                                {item}
                            </Button>
                        )
                    } else {
                        return (
                            <Button
                                key={index}
                                onClick={() => props.setPage(item)}
                            >
                                {item}
                            </Button>
                        )
                    }
                })
            }
        </div>
    );
};

export default Pagin;