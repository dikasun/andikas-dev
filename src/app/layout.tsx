import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import {nunito} from "@/constants";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
    title: 'Andikas',
    description: 'andikas portfolio website',
    openGraph: {
        images: 'https://ik.imagekit.io/4o6binhtw/andikas/andikas.png',
        title: 'Andikas',
        description: 'andikas portfolio website',
    },
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`bg-background-color ${nunito.className}`}>{children}</body>
        </html>
    )
}
