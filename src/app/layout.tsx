import type { Metadata } from "next";
import { Archivo, Signika, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
import { font } from "@/styles/font";
import SiteScripts from "@/components/custom/site-scripts";


const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
    display: "swap",
});

const signika = Signika({
    variable: "--font-signika",
    subsets: ["latin"],
    display: "swap",
});

const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://heindonk-feest.be'),
    title: {
        default: 'Heindonk-Feest',
        template: '%s - JSTACK'
    },
    description: 'Wij creëren innovatieve digitale oplossingen die een positieve impact hebben op de werking van bedrijven en het dagelijkse leven van mensen.',
    keywords: ['softwareontwikkeling', 'software op maat', 'digitale strategie', 'webdevelopment', '4xO methode', 'custom software'],
    authors: [{ name: 'JSTACK', url: 'https://jstack.eu' }],
    creator: 'JSTACK',
    publisher: 'JSTACK',
    openGraph: {
        type: 'website',
        locale: 'nl',
        url: 'https://jstack.eu',
        title: 'JSTACK - Improving business digitally',
        description: 'Wij creëren innovatieve digitale oplossingen die een positieve impact hebben op de werking van bedrijven en het dagelijkse leven van mensen.',
        siteName: 'JSTACK',
        images: [
            {
                url: '/jstackicon.png',
                width: 320,
                height: 320,
                alt: 'JSTACK - Improving business digitally',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'JSTACK - Improving business digitally',
        description: 'Wij creëren innovatieve digitale oplossingen die een positieve impact hebben op de werking van bedrijven en het dagelijkse leven van mensen.'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: 'Software Development',
    icons: {
        icon: '/favicon.ico',
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${font.variable} ${oswald.variable}`}
        >
        <Header/>
        {children}
        <SiteScripts />
      
        </body>
        </html>
    );
}
