import React from 'react';
import styles from './ShowMore.module.css';
import { ShowMoreProps } from '@/app/_types';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNav = () => {
        const newLimit = (pageNumber + 1) * 9;
        
        const searchParams = new URLSearchParams(window.location.search);

        searchParams.set('limit', newLimit.toString());

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname, {scroll: false});
    }

    return (
        <>
            <div className={styles.cont}>
                {!isNext && (
                    <Button className={styles.btn} onClick={handleNav}>
                        Show More
                    </Button>
                )}
            </div>
        </>
    )
}

export default ShowMore