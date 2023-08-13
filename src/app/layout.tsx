import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import {nunito} from "@/constants";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
    title: 'Andikas',
    description: 'Andikas personal website',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body className={`bg-background-color ${nunito.className}`}>{children}</body>
        </html>
    )
}
