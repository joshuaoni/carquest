"use client";

import React, { useState } from 'react';
import styles from './Catalogue.module.css';
import { CustomFilter, Search } from '../index';
import { fuels, yearsOfProduction } from '@/app/_constants';
import { ManufacturerProvider, SetManufacturerProvider } from '@/app/_contexts/ManufacturerProvider';
import ModelProvider, { SetModelProvider } from '@/app/_contexts/ModelProvider';

const Catalogue = () => {
    const [manufacturer, setManufacturer] = useState<string>('Toyota');
    const [model, setModel] = useState<string>('Corolla');

    return (
        <>
            <section id='discover' className={styles.catalogue}>
                <div className={styles.cont}>
                    <div className={styles.container}>
                        <h1 className={styles.heading}>Car Catalogue</h1>
                        <p>Explore the cars you might like</p>
                    </div>

                    <div className={styles.filters}>
                        <ManufacturerProvider manufacturer={manufacturer}>
                            <SetManufacturerProvider setManufacturer={setManufacturer}>
                                <ModelProvider model={model}>
                                    <SetModelProvider setModel={setModel}>
                                        <Search />

                                        <div className={styles.filter_container}>
                                            <CustomFilter title='fuel' options={fuels}/>
                                            <CustomFilter title='year' options={yearsOfProduction}/>
                                        </div>
                                    </SetModelProvider>
                                </ModelProvider>
                            </SetManufacturerProvider>
                        </ManufacturerProvider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catalogue