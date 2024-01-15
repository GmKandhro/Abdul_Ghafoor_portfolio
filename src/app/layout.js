
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
// import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ab Ghafoor Portfolio',
  description: 'Create by Abdul Ghafoor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <Navbar/>
        {children}

        <Footer/>
        {/* </ThemeProvider> */}
        </body>
    </html>
  )
}
