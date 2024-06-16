import {Archivo, Libre_Franklin} from 'next/font/google'
import React from "react";
import {Providers} from "@/app/providers";

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

import './styles.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={libre_franklin.variable + ' ' + archivo.variable}>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  )
}