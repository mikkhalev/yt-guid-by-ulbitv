import React from 'react';
import classes from "./modal.module.css";

const Modal = ({children, visible, setVisible}:any) => {

    const modalClasses = [classes.modalWrapper];
    if (visible) {
        modalClasses.push(classes.modalActive)
    }
    return (
        <div className={modalClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;