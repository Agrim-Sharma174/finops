import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { getServerSession } from 'next-auth'
import SessionProvider from './components/SessionProvider'
import SideBar from './components/SideBar' // Import your Sidebar and Header components here
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(); // It's a promise, so we need async
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <SessionProvider session={session}>
            <div className="flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-black">
              <div className="flex-1 bg-black px-4 pb-4 md:p-4">
                <div className="relative bg-white/95 rounded-2xl flex flex-col gap-4 w-full h-full divide-x divide-blue-200 md:rounded-[40px]">
                  <SideBar />
                  <Header />
                </div>
              </div>
            </div>
            {children}
          </SessionProvider>
        </Providers>
      </body>
    </html>
  )
}
