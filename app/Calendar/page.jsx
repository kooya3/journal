"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { AppWindowIcon, TrashIcon, FilePenIcon, CalendarIcon, LibraryIcon, NewspaperIcon, PlusIcon, TimerIcon, XIcon } from '../constants';

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
          <Link href="/" className="text-gray-400 hover:text-gray-200" prefetch={false}>
            Home
          </Link>
          <Link href="/About" className="text-gray-400 hover:text-gray-200" prefetch={false}>
            About
          </Link>
          <Link href="/Contact" className="text-gray-400 hover:text-gray-200" prefetch={false}>
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
              <Link href="/Diary" className="block" prefetch={false}><Button variant="ghost" className="w-full text-left">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  My Journal
                </Button></Link>
                <Button variant="ghost" className="w-full text-left">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>RL</AvatarFallback>
                  </Avatar>
                  Running Log
                </Button>
                <Link href="/Journal" className="block" prefetch={false}><Button variant="outline" className="w-full">
                  Add Journal
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between w-full">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Calendar</h3>
                <Button variant="ghost" className="text-gray-400 hover:text-gray-200">
                  <PlusIcon className="w-6 h-6" />
                </Button>
              </div>
              <div className="mt-4 w-full">
                <Calendar
                  mode="single"
                  className="bg-gray-800 text-gray-400 rounded-lg p-4 w-full"
                  dayClassName={(date) => {
                    if (date.getDate() === 15) {
                      return "bg-orange-500 text-white rounded-full"
                    } else if (date.getDate() === 25) {
                      return "bg-green-500 text-white rounded-full"
                    } else {
                      return ""
                    }
                  }}
                  dayTooltipContent={(date) => {
                    if (date.getDate() === 15) {
                      return "Quarterly review meeting"
                    } else if (date.getDate() === 25) {
                      return "Vacation day"
                    } else {
                      return ""
                    }
                  }}
                  onSelect={handleDateSelect}
                />
              </div>
            </div>
          </div>
          {selectedDate && (
            <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{selectedDate.toLocaleDateString()}</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" className="text-gray-400 hover:text-gray-200" onClick={handleEdit}>
                      <FilePenIcon className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-gray-400 hover:text-gray-200"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this?")) {
                        }
                      }}
                    >
                      <TrashIcon className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="time" className="block text-gray-400 font-medium">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="bg-gray-700 text-gray-300 rounded-md px-3 py-2 w-full"
                      defaultValue={selectedDate.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    />
                  </div>
                  <div>
                    <label htmlFor="note" className="block text-gray-400 font-medium">
                      Note
                    </label>
                    <textarea
                      id="note"
                      rows={3}
                      className="bg-gray-700 text-gray-300 rounded-md px-3 py-2 w-full"
                      placeholder="Enter your note for the day"
                    />
                  </div>
                  <Button className="w-full" onClick={() => {}}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <footer className="p-4 bg-gray-800 border-t">
        <div className="flex justify-between">
          <Link href="#" className="text-gray-400 hover:text-gray-200" prefetch={false}>
            Help
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-200" prefetch={false}>
            Support
          </Link>
        </div>
      </footer>
    </div>
  )
}
