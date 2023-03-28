import * as React from "react";
import styles from './SCSS/NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div>
            <h1 className={styles.root}>
                <span>😕</span>
            </h1>
            <br/>
            <h2>К сожалению данная страница отсутствует в нашем интернет-магазине...</h2>
        </div>
    )
};
