
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AppWindowIcon, CalendarIcon, LibraryIcon, NewspaperIcon, PlusIcon, TimerIcon, XIcon } from '../constants';

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formValid, setFormValid] = useState(false)
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
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setFormValid(false)
    } else {
      setFormValid(true)
      window.location.reload()
    }
  }
  useEffect(() => {
    setFormValid(name.trim() !== "" && email.trim() !== "" && message.trim() !== "")
  }, [name, email, message])
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
              <Link href="/Journal" className="block" prefetch={false}>
                <Button variant="outline" className="w-full hover:bg-gray-700 transition-colors">
                  <NewspaperIcon className="w-5 h-5 mr-2" />
                  Journal
                </Button>
              </Link>
              <Link href="/Timeline" className="block" prefetch={false}>
                <Button variant="outline" className="w-full hover:bg-gray-700 transition-colors">
                  <TimerIcon className="w-5 h-5 mr-2" />
                  Timeline
                </Button>
              </Link>
              <Link href="/Calendar" className="block" prefetch={false}>
                <Button variant="outline" className="w-full hover:bg-gray-700 transition-colors">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Calendar
                </Button>
              </Link>
              <Link href="/Librari" className="block" prefetch={false}>
                <Button variant="outline" className="w-full hover:bg-gray-700 transition-colors">
                  <LibraryIcon className="w-5 h-5 mr-2" />
                  Library
                </Button>
              </Link>
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
                <Button variant="ghost" className="w-full text-left hover:bg-gray-700 transition-colors">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>RL</AvatarFallback>
                  </Avatar>
                  Running Log
                </Button>
                <Link href="#" className="block" prefetch={false}>
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
            <h2 className="text-4xl font-bold text-white mb-8">Contact Us</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-400">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="bg-gray-700 border-gray-600 text-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-400">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-700 border-gray-600 text-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-400">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="bg-gray-700 border-gray-600 text-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className={`transition-colors ${
                        formValid ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 mb-4">
                  Get in touch with us for any inquiries or feedback. We'd love to hear from you!
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Learn More
                  </Button>
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
