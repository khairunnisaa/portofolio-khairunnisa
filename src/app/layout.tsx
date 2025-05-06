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
        <body>{children}</body>
        </html>
    );
}
