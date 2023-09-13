"use client";

import React, { Fragment, useState } from 'react';
import styles from './CustomFilter.module.css';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/app/_types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useManufacturer } from '@/app/_contexts/ManufacturerProvider';
import { useModel } from '@/app/_contexts/ModelProvider';

const CustomFilter = ({title, options}: CustomFilterProps) => {
    const [selected, setSelected] = useState(options[0]);

    const manufacturer = useManufacturer();
    const model = useModel();

    const router = useRouter();

    const handleUpdateParams = (e: {title: string, value: string}) => {
        const searchParams = new URLSearchParams(window.location.search);

        searchParams.set(title, e.value.toLowerCase());
        searchParams.set('manufacturer', manufacturer);
        searchParams.set('model', model);

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname, {scroll: false});
    }

    return (
        <>
        <div className={styles.container}>
                <Listbox
                    value={selected}
                    onChange={e => {
                        setSelected(e);
                        handleUpdateParams(e);
                    }}
                >
                    <div className={styles.listbox}>
                        <Listbox.Button className={styles.filter__btn}>
                            <span>{selected.title}</span>
                            <Image
                                width={20}
                                height={20}
                                alt='chevron up down'
                                quality={100}
                                className={styles.img}
                                src='/chevron-up-down.svg'
                            />
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Listbox.Options
                                className={styles.filter__options}
                            >
                                {options.map(option => (
                                    <Listbox.Option 
                                        key={option.title}
                                        value={option}
                                        className={({active, selected}) => `${active || selected ? styles.active : styles.disabled}`}
                                    >
                                        <span>
                                            {option.title}
                                        </span>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div> 
        </>
    )
}

export default CustomFilter