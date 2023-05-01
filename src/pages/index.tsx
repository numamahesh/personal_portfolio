import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <title>Uma Mahesh Dhupaguntla Portfolio</title>
      <h1 className='text-red-500'>Hey I am Building Portfoilo</h1>
      </div>
        
    
    </main>
  )
}