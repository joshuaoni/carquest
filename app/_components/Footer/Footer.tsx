import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import { footerLinks } from '@/app/_constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
            <div>
                <div className={styles.container}>
                    <div className={styles.cont}>
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width={118}
                            height={18}
                            quality={100}
                        />
                        <p className={styles.text}>Carhub 2023 <br/> All rights reserved &copy;</p>
                    </div>

                    <div className={styles.links}>
                        {footerLinks.map(link=>(
                            <div key={link.title} className={styles.link}>
                                <h3>{link.title}</h3>
                                {link.links.map(item=>(
                                    <Link
                                        href={item.url}
                                        key={item.title}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>@2023 Joshua Oni. All Rights Reserved</p>

                    <div className={styles.copyrights}>
                        <Link href='/'>Privacy Policy</Link>
                        <Link href='/'>Terms Of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer