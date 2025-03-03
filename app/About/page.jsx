/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AppWindowIcon, CalendarIcon, LibraryIcon, NewspaperIcon, PlusIcon, TimerIcon, XIcon } from '../constants';

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  const handleEdit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  const handleShare = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  const handleDateSelect = (date) => {
    setSelectedDate(date)
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300">
      <header className="flex items-center justify-between h-16 px-4 bg-gray-800 shadow-md">
        <div className="flex items-center space-x-4">
          <AppWindowIcon className="w-8 h-8" />
          <h1 className="text-xl font-bold">Journal-page</h1>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="text-gray-400 hover:text-gray-200 transition-colors" prefetch={false}>
            Home
          </Link>
          <Link href="/About" className="text-gray-400 hover:text-gray-200 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="/Contact" className="text-gray-400 hover:text-gray-200 transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 p-4 bg-gray-800 border-r">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Welcome</h2>
              <p className="text-gray-400">What is a meaningful conversation that you have had recently?</p>
            </div>
            <div className="space-y-4">
            <Link href="/Journal" className="block" prefetch={false}><Button variant="outline" className="w-full">
                <NewspaperIcon className="w-5 h-5 mr-2" />
                Journal
              </Button></Link>
              <Link href="/Timeline" className="block" prefetch={false}><Button variant="outline" className="w-full">
                <TimerIcon className="w-5 h-5 mr-2" />
                Timeline
              </Button></Link>
              <Link href="/Calendar" className="block" prefetch={false}><Button variant="outline" className="w-full">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Calendar
              </Button></Link>

              <Link href="/Librari" className="block" prefetch={false}><Button variant="outline" className="w-full">
                <LibraryIcon className="w-5 h-5 mr-2" />
                Library
              </Button></Link>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Journals</h2>
              <div className="space-y-1">
              <Link href="/Diary" className="block" prefetch={false}><Button variant="ghost" className="w-full text-left hover:bg-gray-700 transition-colors">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  My Journal
                </Button></Link>
                
                <Link href="/Journal" className="block" prefetch={false}>
                  <Button variant="outline" className="w-full hover:bg-gray-700 transition-colors">
                    Add Journal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-md p-8">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-white mb-8">About Us</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <img src="/placeholder.svg" width={500} height={300} alt="About Us" className="rounded-lg" />{/* eslint-disable-line @next/next/no-img-element */}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 mb-4">
                  We are a team of passionate individuals dedicated to creating innovative solutions that empower our
                  clients to achieve their goals. With years of experience in the industry, we have developed a deep
                  understanding of the challenges our clients face and have tailored our services to meet their unique
                  needs. {/* eslint-disable-line react/no-unescaped-entities */}
                </p>
                <p className="text-gray-400 mb-4">
                  Our mission is to provide our clients with the tools and resources they need to succeed in today's
                  fast-paced digital landscape. We believe in the power of collaboration and strive to build
                  long-lasting partnerships with our clients, working closely with them to ensure their success.  {/* eslint-disable-line react/no-unescaped-entities */}
                </p>
                <div className="flex justify-end">
                  <Button className="bg-primary-500 hover:bg-primary-600 transition-colors">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="p-4 bg-gray-800 border-t">
        <div className="flex justify-between">
          <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors" prefetch={false}>
            Help
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-200 transition-colors" prefetch={false}>
            Support
          </Link>
        </div>
      </footer>
    </div>
  )
}
