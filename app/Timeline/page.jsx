"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AppWindowIcon, CalendarIcon, LibraryIcon, RefreshCwIcon, NewspaperIcon, PlusIcon, TimerIcon, XIcon } from '../constants';

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)
  const [quotes, setQuotes] = useState(["We cannot solve problems with the kind of thinking we employed when we came up with them."])
  const [tasks, setTasks] = useState(["Review quarterly goals and plan next steps."])
  const [showQuoteInput, setShowQuoteInput] = useState(false)
  const [newQuote, setNewQuote] = useState("")
  const [showTaskInput, setShowTaskInput] = useState(false)
  const [newTask, setNewTask] = useState("")

  const handleRefresh = (type) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // You can add logic here to fetch the latest data from an API or other source
    }, 2000)
  }

  const handleSaveQuote = () => {
    if (newQuote.trim()) {
      setQuotes([newQuote, ...quotes])
      setNewQuote("")
      setShowQuoteInput(false)
    }
  }

  const handleSaveTask = () => {
    if (newTask.trim()) {
      setTasks([newTask, ...tasks])
      setNewTask("")
      setShowTaskInput(false)
    }
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
              <Link href="/Journal" className="block" prefetch={false}>
                <Button variant="outline" className="w-full">
                  <NewspaperIcon className="w-5 h-5 mr-2" />
                  Journal
                </Button>
              </Link>
              <Link href="/Timeline" className="block" prefetch={false}>
              <Button variant="outline" className="w-full">
                <TimerIcon className="w-5 h-5 mr-2" />
                Timeline
              </Button>
              </Link>
              <Link href="/Calendar" className="block" prefetch={false}>
              <Button variant="outline" className="w-full">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Calendar
              </Button>
              </Link>

              <Link href="/Librari" className="block" prefetch={false}>
              <Button variant="outline" className="w-full">
                <LibraryIcon className="w-5 h-5 mr-2" />
                Library
              </Button>
              </Link>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Journals</h2>
              <div className="space-y-1">
              <Link href="/Diary" className="block" prefetch={false}>
                <Button variant="ghost" className="w-full text-left">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  My Journal
                </Button></Link>
                
                <Link href="/Journal" className="block" prefetch={false}><Button variant="outline" className="w-full">
                  Add Journal
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Quotes</h3>
                <Button variant="ghost" className="text-gray-400 hover:text-gray-200" onClick={() => setShowQuoteInput(!showQuoteInput)}>
                  <PlusIcon className="w-6 h-6" />
                </Button>
              </div>
              {showQuoteInput && (
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder="Enter new quote"
                  />
                  <Button variant="outline" className="mt-2" onClick={handleSaveQuote}>
                    Save
                  </Button>
                </div>
              )}
              {quotes.map((quote, index) => (
                <div key={index} className="flex items-center justify-between mt-4">
                  <p className="text-gray-400">{quote}</p>
                </div>
              ))}
              <Button
                variant="outline"
                className="mt-4 bg-orange-500 text-white hover:bg-orange-600"
                onClick={() => handleRefresh('quotes')}
              >
                {isLoading ? <div className="w-5 h-5" /> : <RefreshCwIcon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Upcoming Tasks</h3>
                <Button variant="ghost" className="text-gray-400 hover:text-gray-200" onClick={() => setShowTaskInput(!showTaskInput)}>
                  <PlusIcon className="w-6 h-6" />
                </Button>
              </div>
              {showTaskInput && (
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 bg-gray-900 border border-gray-700 rounded"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter new task"
                  />
                  <Button variant="outline" className="mt-2" onClick={handleSaveTask}>
                    Save
                  </Button>
                </div>
              )}
              {tasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between mt-4">
                  <p className="text-gray-400">{task}</p>
                </div>
              ))}
              <Button
                variant="outline"
                className="mt-4 bg-orange-500 text-white hover:bg-orange-600"
                onClick={() => handleRefresh('tasks')}
              >
                {isLoading ? <div className="w-5 h-5" /> : <RefreshCwIcon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
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
