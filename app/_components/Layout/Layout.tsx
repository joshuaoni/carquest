import React from 'react';
import styles from './Layout.module.css';
import { LayoutProps } from '../../_types';

const Layout = ({ children } : LayoutProps) => {

    return (
        <>
            <section className={styles.layout}>
                {children}
            </section>
        </>
    )
}

export default Layout