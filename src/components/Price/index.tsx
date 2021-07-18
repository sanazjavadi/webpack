import React from "react";

import styles from './price.module.scss';


function Price({children}) {
    

    return (
        <span className={styles.price}>
            {children} تومان
        </span>
    )
}

export default Price