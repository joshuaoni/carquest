"use client"

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import Button from '@mui/material/Button';
import hero from '../../../public/hero.png';

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero_text}>
                    <h1 className={styles.title}>Find, book, rent a car - quick and super easy!</h1>

                    <p className={styles.subtitle}>Streamline your car rental experience with our effortless booking process</p>

                    <Button 
                    sx={{borderRadius: '1000px'}}
                        className={styles.btn} 
                        variant="contained"
                        onClick={()=>{
                            const e = document.getElementById('discover');
                            e?.scrollIntoView({
                                block: 'start',
                                behavior: 'smooth',
                                inline: 'start'
                            })
                        }}>
                            Explore Cars
                    </Button>
                </div>

                <div className={styles.img_cont}>
                    <div className={styles.img}>
                        <Image
                            alt='car'
                            quality={100}
                            src={hero}
                            className={styles.car_img}
                        />

                    <div className={styles.img_overlay}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero