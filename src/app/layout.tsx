import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`font-main text-sm text-right overflow-x-hidden ${inter.className}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
