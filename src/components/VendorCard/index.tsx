import React from "react";


//styles

import styles from './Cart.module.scss';



//components
import Image from '../Image'
import Info from '../Info'
import Badge from '../Badge'
import Price from '../Price'

const Cart:React.FC = ({ data }) => {

   console.log(data.logo)

    return (
        <div className={styles.cart}>
            <Image src={data.logo} />
            <Info title={data.title} description={data.description} area={data.area} city={data.city} />
            <div className={styles.footerCart}>
                <Badge>
                    {data.rating ? data.rating.toFixed(1) : null }
                </Badge>

                <Price>
                    {data.deliveryFee}
                </Price>
            </div>
        </div>
    )
}

export default Cart
