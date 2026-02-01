import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/custom/header";
import { libre, lobster } from "@/styles/font";
import SiteScripts from "@/components/custom/site-scripts";



export const metadata: Metadata = {
    metadataBase: new URL("https://heindonk-feest.be"),
    title: {
        default: "Heindonk Feest",
        template: "%s - Heindonk Feest",
    },
    description: "Heindonk Feest: drie dagen sport, muziek en plezier met foodtrucks en live optredens.",
    keywords: ["Heindonk Feest", "festival", "sport", "muziek", "foodtrucks"],
    authors: [{ name: "Heindonk Feest", url: "https://heindonk-feest.be" }],
    creator: "Heindonk Feest",
    publisher: "Heindonk Feest",
    openGraph: {
        type: "website",
        locale: "nl",
        url: "https://heindonk-feest.be",
        title: "Heindonk Feest",
        description: "Heindonk Feest: drie dagen sport, muziek en plezier met foodtrucks en live optredens.",
        siteName: "Heindonk Feest",
        images: [
            {
                url: "/favicon.ico",
                width: 320,
                height: 320,
                alt: "Heindonk Feest",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Heindonk Feest",
        description: "Heindonk Feest: drie dagen sport, muziek en plezier met foodtrucks en live optredens.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Festival",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${libre.variable} ${lobster.variable}`}>
                <Header />
                {children}
                <SiteScripts />
            </body>
        </html>
    );
}
