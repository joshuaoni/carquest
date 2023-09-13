import { Catalogue, Hero, Layout, CarComponent } from './_components';
import styles from './page.module.css';
import { getCars } from './_services';
import { CarProvider } from './_contexts/CarProvider';
import { HomePageProps } from './_types';

export default async function Home({ searchParams }: HomePageProps) {
    const [cars, error] = await getCars({
        manufacturer: searchParams?.manufacturer || '',
        year: searchParams?.year || '2022',
        fuel: searchParams?.fuel || '',
        limit: searchParams?.limit || '9',
        model: searchParams?.model || ''
    }) as [[], Error]

    return (
        <main className={styles.main}>
            <Layout>
                <Hero/>

                <CarProvider cars={cars}>
                    <Catalogue/>

                     <CarComponent error={error?.message}/>
                </CarProvider>
            </Layout>
        </main>
    )
}
