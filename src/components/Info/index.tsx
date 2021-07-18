import React from "react";
import styles from './Info.module.scss'


function Info({title, description, city, area}) {
    

    return (
        <div className={styles.Info}>
            <p className={styles.name}> {title} </p>
            <p className={styles.type}> {description} </p>
            <p className={styles.address}> {` ${city},${area} `} </p>
        </div>
    )
}

export default Info