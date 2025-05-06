// app/layout.tsx
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // animasi hanya terjadi sekali saat scroll pertama
        })
    }, []);
    return (
        <html lang="en">
        <head title="Portofolio Khairunnisa">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                integrity="sha384-..."
                crossOrigin="anonymous"
            />

        </head>
        <body>{children}</body>
        </html>
    );
}
