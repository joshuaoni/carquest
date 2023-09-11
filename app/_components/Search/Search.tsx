"use client";

import React from 'react';
import styles from './Search.module.css';
import { SearchManufacturer } from '../index';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useManufacturer } from '@/app/_contexts/ManufacturerProvider';
import { useModel, useSetModel } from '@/app/_contexts/ModelProvider';;

const Search = () => {
    const manufacturer = useManufacturer();
    const model = useModel();
    const setModel = useSetModel();

    const router = useRouter();

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (manufacturer === '' && model === '') {
            return alert('Please fill the input fields!');
        }

        updateSearchParams(model.toLowerCase().trim(), manufacturer.toLowerCase().trim());
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set('model', model);
        } else {
            searchParams.delete('model');
        }
        
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        } else {
            searchParams.delete('manufacturer');
        }

        searchParams.set('limit', '9');
        searchParams.delete('fuel_type');
        searchParams.delete('year');

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        
        router.push(newPathname, {scroll: false});
    }
    
    return (
        <>
            <div className={styles.form}>
                <div className={styles.searchbar}>
                    <SearchManufacturer/>
                </div>

                <div className={styles.searchbar__item}>
                    <Image
                        src='/model-icon.png'
                        alt='car model icon'
                        width={25}
                        height={25}
                        className={styles.icon}
                    />
                    <input
                        id="outlined-controlled"
                        value={model}
                        onChange={event => {
                            setModel(event.target.value);
                        }}
                        className={styles.input}
                    />
                </div>
                
                <Button 
                    className={styles.btn}
                    onClick={handleSearch}>
                    <SearchIcon/>
                </Button>
            </div>
        </>
    )
}

export default Search