import React from "react"
import { Link } from 'react-router-dom'

//styles
import styles from './Home.module.scss'


//components
import Button from '../../components/Button'


const  Home: React.FC = (props) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
               
            </header>
            <aside>
                <h2>سفارش آنلاین غذا از بهترین رستوران‌‌ها و فست‌فود‌‌ها</h2>
                <Link to="/vendor">
                <Button>
                    غذاهای بیشتر                </Button>
                </Link>
                
            </aside>
            <figure>
                <img src="https://image.freepik.com/free-vector/courier-shipping-package-moped-flat-illustration_74855-5227.jpg" alt="" />
            </figure>
        </div>
    )
}


export default Home;
