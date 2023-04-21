import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sing in section */}
          <div className="w-3/5 p-5">
            <p>Sing In</p>
          </div>
          
          {/* Sing up section */}
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up personal information and start journey with us.</p>
            <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sing Up</a>
          </div>   
        </div>
      </main>
    </div>

  )
}

// 