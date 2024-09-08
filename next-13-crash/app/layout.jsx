import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Traversy Media',
  description: 'Web development tutorials and courses',
  keywords: 'web development, react, next'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
