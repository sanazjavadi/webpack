import React from "react";
import styles from './Img.module.scss'


function Img({src}) {
    

    return (
        <div className={styles['image-wrapper']}>
      <img src={`${src}`} alt=""  
        className={styles.image}/>
        </div>
  
    )
}

export default Img;
