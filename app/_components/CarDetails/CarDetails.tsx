"use client";

import React, { Fragment } from 'react';
import styles from './CarDetails.module.css';
import { CarDetailsProps } from '../../_types';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { generateCarImageUrl } from '@/app/_services';


const CarDetails = ({isOpen, closeModal, car} : CarDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className={styles.dialog} onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <div className={styles.backdrop}/>
                    </Transition.Child>

                    <div className={styles.box}>
                        <div className={styles.div}>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'>
                                <Dialog.Panel className={`${styles.panel} ${styles.transform}`}>
                                    <button
                                        type='button'
                                        onClick={closeModal}>
                                        <Image
                                            src='/close.svg'
                                            alt='close'
                                            width={20}
                                            height={20}
                                            quality={100}
                                        />
                                    </button>

                                    <div className={styles.modal}>
                                        <div>
                                            <Image
                                                className={styles.img}
                                                src={generateCarImageUrl(car)}
                                                alt='Car'
                                                quality={100}
                                                fill
                                                priority
                                            />
                                        </div>

                                        <div className={styles.images}>
                                            <div className={styles.image}>
                                                <Image
                                                    className={styles.img}
                                                    src={generateCarImageUrl(car, 29)}
                                                    alt='Car'
                                                    quality={100}
                                                    fill
                                                    priority
                                                />
                                            </div>
                                            <div className={styles.image}>
                                                <Image
                                                    className={styles.img}
                                                    src={generateCarImageUrl(car, 33)}
                                                    alt='Car'
                                                    quality={100}
                                                    fill
                                                    priority
                                                />
                                            </div>
                                            <div className={styles.image}>
                                                <Image
                                                    className={styles.img}
                                                    src={generateCarImageUrl(car, 13)}
                                                    alt='Car'
                                                    quality={100}
                                                    fill
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.info}>
                                        <h2>
                                           {car.make} {car.model} 
                                        </h2>

                                        <div>
                                            {Object.entries(car).map(([key,value]) => (
                                                <div className={styles.row} key={key}>
                                                    <h4>{key.replace('_', ' ')}</h4>
                                                    <p>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails