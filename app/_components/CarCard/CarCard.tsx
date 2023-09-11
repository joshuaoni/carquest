"use client"

import React, {useState} from 'react';
import styles from './CarCard.module.css';
import { CarCardProps } from '@/app/_types';
import Image from 'next/image';
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { CarDetails } from '../index';
import { generateCarImageUrl } from '@/app/_services';

const CarCard = ({car}:CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const {city_mpg, year, make, model, drive, transmission} = car;

    const calculateCarRent = (city_mpg: number, year: number) => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age
      
        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
      
        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
      
        return rentalRatePerDay.toFixed(0);
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2>{make} {model}</h2>
                </div>

                <p className={styles.price}>
                    <span>
                        $
                    </span>
                    {calculateCarRent(city_mpg, year)}
                    <span>
                        /day
                    </span>
                </p>

                <div className={styles.img_cont}>
                    <Image
                        className={styles.img}
                        src={generateCarImageUrl(car)}
                        alt='Car'
                        quality={100}
                        fill
                        priority
                    />
                </div>

                <div className={styles.bottom}>
                    <div>
                        <div className={styles.items}>
                            <Image
                                alt='steering wheel'
                                src='/steering-wheel.svg'
                                width={20}
                                height={20}
                            />
                            <p>
                                {transmission === 'a' ? 'Automatic' : 'Manual'}
                            </p>
                        </div>
                        <div className={styles.items}>
                            <Image
                                alt='tire'
                                src='/tire.svg'
                                width={20}
                                height={20}
                            />
                            <p>
                                {drive.toLowerCase()}
                            </p>
                        </div>
                        <div className={styles.items}>
                            <Image
                                alt='gas'
                                src='/gas.svg'
                                width={20}
                                height={20}
                            />
                            <p>
                                {city_mpg} MPG
                            </p>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <Button
                            onClick={()=>setIsOpen(true)}
                            endIcon={<ArrowCircleRightIcon />}>
                            View More
                        </Button>
                    </div>
                </div>

                <CarDetails
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    car={car}
                />
            </div>
        </>
    )
}

export default CarCard