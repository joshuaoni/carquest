"use client"

import React from 'react';
import styles from './CarComponent.module.css';
import { useCars } from '@/app/_contexts/CarProvider';
import { CarCard, ShowMore } from '../index';
import { CarProps } from '@/app/_types';
import { useSearchParams } from 'next/navigation';

const CarComponent = ({error}: {error: string}) => {
    const cars = useCars();
    
    const isDataEmpty = !Array.isArray(cars) || !cars || !cars.length;

    const searchParams = useSearchParams();

    return (
        <>
            <section className={styles.container}>
                <div className={styles.section}>
                    {error ? 
                        <div className={styles.error}>
                            {error === 'fetch failed' ? 'Oops. Check your network connection and refresh the page' : 'Oops. An Error Occured. Try Again.'}
                        </div> :
                        <>
                            {!isDataEmpty ? (
                                <>
                                    <div className={styles.cars_wrapper}>
                                        {cars.map((car : CarProps, i : number) => (
                                            <CarCard car={car} key={i}/>
                                        ))}
                                    </div>

                                    <ShowMore 
                                        pageNumber={(Number(searchParams.get('limit')) || 9) / 9}
                                        isNext={(Number(searchParams.get('limit') || 9)) > cars.length}
                                    />
                                </>
                            ) :
                            (
                                <div className={styles.error}>
                                    Ooops... No Cars Available
                                </div>
                            )
                            }
                        </>
                    }   
                </div>
            </section>
        </>
    )
}

export default CarComponent