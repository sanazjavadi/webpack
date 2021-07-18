import React from "react";

//styles

import styles from './Button.module.scss'



const  Button: React.FC = ({ children, width, height }) => {


    return (
        <button type="button"  className={`${styles.btn}`}>
            {children}
        </button>
    )
}


export default Button;
