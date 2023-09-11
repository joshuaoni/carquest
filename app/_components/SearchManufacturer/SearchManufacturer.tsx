"use client";

import React, { useState, Fragment } from 'react';
import styles from './SearchManufacturer.module.css';
import { SearchManufacturerProps } from '@/app/_types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import logo from '../../../public/car-logo.svg';
import { manufacturers } from '@/app/_constants';
import { useSetManufacturer } from '@/app/_contexts/ManufacturerProvider';

const SearchManufacturer = () => {
    const [query, setQuery] = useState('');
    
    const setManufacturer = useSetManufacturer();

    const filteredManufacturers = query === '' 
    ? manufacturers 
    : manufacturers.filter(item => item.toLowerCase().includes(query.trim().toLowerCase()));

    return (
        <>
            <div className={styles.container}>
                <Combobox defaultValue={manufacturers[38]} onChange={setManufacturer}>
                    <div className={styles.cont}>
                        <Combobox.Button className={styles.combo_btn}>
                            <Image 
                                src={logo}
                                alt='Car logo'
                                width={20}
                                height={20}
                                quality={100}
                                className={styles.logo}
                            />
                        </Combobox.Button>

                        <Combobox.Input 
                            className={styles.combo_input}
                            displayValue={(manufacturer:string)=>manufacturer}
                            onChange={(e)=>setQuery(e.target.value)}
                        />

                        <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                            afterLeave={()=>setQuery('')}
                        >
                            <Combobox.Options>
                                {filteredManufacturers.length === 0 && query !== '' ? (
                                    <span className={styles.noti}>Nothing found</span>
                                ) : filteredManufacturers.map(item => (
                                    <Combobox.Option
                                        key={item}
                                        className={({active}) => `
                                        ${styles.option} 
                                        ${active ? styles.active_btn : styles.disabled_btn}`}
                                        value={item}
                                    >
                                        {item}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
            </div>
        </>
    )
}

export default SearchManufacturer