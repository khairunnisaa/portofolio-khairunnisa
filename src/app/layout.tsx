
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";
import 'aos/dist/aos.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeRegistry from "@/app/theme-registry";

export const metadata = {
    title: 'My Portfolio',
    description: 'Portfolio built with Next.js, TypeScript, MUI',
};

export default function RootLayout({children,}: { children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeRegistry>{children}</ThemeRegistry>
        <script type="module">
            import motion from 'https://cdn.jsdelivr.net/npm/motion@12.12.1/+esm'
        </script>
        </body>
        </html>
    );
}
