import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from '../_components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carquest App',
  description: 'Streamline your car rental experience with our effortless booking process',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Navbar/>
            {/* <Suspense fallback={<Loading />}> */}
                {children}
            {/* </Suspense> */}
            <Footer/>
        </body>
    </html>
  )
}
