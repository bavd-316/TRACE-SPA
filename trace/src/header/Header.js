import React from 'react';
import styles from './Header.css';

let navbar = (page) => {
    if (page.active) {
        return (
            <div className={styles.label}>
                <p className={styles.active}>{page.label}</p>
                <hr className={styles.active}/>
            </div>
        )
    } else {
        return (
            <div className={styles.label}>
                <p>{page.label}</p>
                <hr/>
            </div>
        )
    }
};

let header = (props) => {
    return (
        <div className={styles.header}>
            <p className={styles.logo}>NU <span>TRACE</span></p>
            {props.title ? <h2 className={styles.title}></h2> : null}
            <div className={styles.navbar}>
                {props.pages.map((page) => {
                    return navbar(page)
                })}
            </div>
        </div>
    )
};

export default header;