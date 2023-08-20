import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { nunito } from "@/shared/config/constants";
import Footer from "@/common/widgets/Footer";
import ScrollToTopButton from "@/common/widgets/ScrollToTopButton";
import { Toaster } from "react-hot-toast";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Andikas",
  description: "andikas portfolio website",
  openGraph: {
    images: "https://ik.imagekit.io/4o6binhtw/andikas/andikas.png",
    title: "Andikas",
    description: "andikas portfolio website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background-color flex flex-col min-h-fit max-w-full lg:max-w-80% xl:max-w-65% 2xl:max-w-55% mt-28 mx-auto px-12 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-20 text-rich-black ${nunito.className}`}
      >
        <Toaster />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
