'use client'
import './globals.css'
import { NextUIProvider } from "@nextui-org/react";
import axios from 'axios';
import Sidebar from '@/components/sidebar/Sidebar';
import { usePathname } from 'next/navigation';

axios.defaults.baseURL = process.env.BACK_URI

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body  >
        <NextUIProvider>
          <div className='flex min-h-screen bg-black text-white gap-3 px-2'>
            {path.startsWith('/auth') ? null : <Sidebar />}
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html >
  )
}
