import React from 'react';
import classes from "./loader.module.css";
const Loader = () => {
    return (
        <div className={classes.loaderWrapper}>
            <div className={classes.loader}>

            </div>
            <p className={classes.loaderText}>
                Loading...
            </p>
        </div>
    );
};

export default Loader;