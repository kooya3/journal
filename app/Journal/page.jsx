"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'react-toastify';
import { AppWindowIcon, CalendarIcon, LibraryIcon, NewspaperIcon, PlusIcon, TimerIcon } from '../constants';

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)
  const [journalEntries, setJournalEntries] = useState([]) // State to hold journal entries
  const [journalEntry, setJournalEntry] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editingEntry, setEditingEntry] = useState(null)

  useEffect(() => {
    // Retrieve saved journal entries from local storage when the component mounts
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries") || "[]")
    setJournalEntries(savedEntries)
  }, [])

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleSubmit = () => {
    handleRefresh()
    if (editMode) {
      const updatedEntries = journalEntries.map(entry => 
        entry.id === editingEntry.id ? { ...entry, text: journalEntry } : entry
      )
      setJournalEntries(updatedEntries)
      localStorage.setItem("journalEntries", JSON.stringify(updatedEntries))
      toast.success("Journal entry updated!")
    } else {
      const newEntry = { id: Date.now(), text: journalEntry }
      const updatedEntries = [...journalEntries, newEntry]
      setJournalEntries(updatedEntries)
      localStorage.setItem("journalEntries", JSON.stringify(updatedEntries))
      toast.success("Journal entry saved!")
    }
    setJournalEntry("")
    setEditMode(false)
    setEditingEntry(null)
  }

  const handleEdit = (entry) => {
    setEditMode(true)
    setJournalEntry(entry.text)
    setEditingEntry(entry)
  }

  const handleDelete = (id) => {
    const updatedEntries = journalEntries.filter(entry => entry.id !== id)
    setJournalEntries(updatedEntries)
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries))
    toast.success("Journal entry deleted!")
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
              <Link href="/Diary" className="block" prefetch={false}><Button variant="ghost" className="w-full text-left">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  My Journal
                </Button></Link>
                
                <Link href="/Journal" className="block" prefetch={false}>
                  <Button variant="outline" className="w-full">
                    Add Journal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex items-center justify-center bg-gray-800 rounded-lg shadow-md p-8">
          <div className="flex flex-col items-center justify-center w-full">
            <PlusIcon className="w-24 h-24 text-gray-400" />
            <h3 className="text-3xl font-bold text-white mt-6">{editMode ? "Edit Entry" : "Add Entry"}</h3>
            <Textarea
              className="w-full h-80 bg-gray-700 rounded-lg p-6 mt-6 text-white focus:outline-none"
              placeholder="Start writing your journal entry..."
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              className="mt-6"
            >
              {editMode ? "Save" : "Submit"}
            </Button>
            <div className="mt-8 w-full">
              {journalEntries.map(entry => (
                <div key={entry.id} className="p-4 mb-4 bg-gray-700 rounded-lg flex justify-between items-center">
                  <p className="text-white">{entry.text}</p>
                  <div className="space-x-2 flex  gap-1 items-center">
                    <Button className="hover:bg-gray-600 transition-colors focus:bg-orange-500 focus:text-white" variant="outline" onClick={() => handleEdit(entry)}>Edit</Button>
                    <Button className="hover:bg-gray-600 transition-colors focus:bg-orange-500 focus:text-white" variant="outline" onClick={() => handleDelete(entry.id)}>Delete</Button>
                  </div>
                </div>
              ))}
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
