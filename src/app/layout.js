'use client'
import './globals.css'
import { NextUIProvider } from "@nextui-org/react";
import axios from 'axios';
import Sidebar from '@/components/sidebar/Sidebar';
import { usePathname } from 'next/navigation';

axios.defaults.baseURL = 'http://localhost:8080/api'

export default function RootLayout({ children }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body >
        <NextUIProvider>
          <div className='flex h-screen gap-10'>
            {path.startsWith('/auth') ? null : <Sidebar />}
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html >
  )
}
