import {Archivo, Libre_Franklin} from 'next/font/google'
import React from "react";
import {Providers} from "@/app/providers";
import './styles.css';
import {Footer} from "@/components/layout/Footer";

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={libre_franklin.variable + ' ' + archivo.variable}>
    <Providers>
      <div className="flex flex-col min-h-[100dvh]">
        {children}
      </div>
      <Footer />
    </Providers>
    </body>
    </html>
  )
}