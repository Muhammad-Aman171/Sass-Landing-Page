import type { Metadata } from "next";
import { Inter } from '@next/font/google';
import "./globals.css";
import Navbar from "./components/navbar/navbar";



const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Sass landing page",
  description: "Generated by Muhammad Aman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
