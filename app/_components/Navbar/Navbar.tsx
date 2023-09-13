import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.container}>
                    <div className={styles.nav}>
                        <Link 
                        className={styles.logo}
                        href='/'>
                            <Image
                                src='/logo.svg'
                                alt='logo'
                                quality={100}
                                width={118}
                                height={18}
                            />
                        </Link>

                        <Button
                            className={styles.btn}>
                            Sign In
                        </Button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar