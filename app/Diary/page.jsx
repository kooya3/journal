"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AppWindowIcon, CalendarIcon, LibraryIcon, NewspaperIcon, FilePenIcon, TimerIcon, TrashIcon } from "../constants";

export default function Component() {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [entryData, setEntryData] = useState({ title: "", content: "" });

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;

    if (editingEntry !== null) {
      const updatedEntries = entries.map((entry, index) =>
        index === editingEntry ? entryData : entry
      );
      setEntries(updatedEntries);
      setEditingEntry(null);
    } else {
      setEntries([...entries, entryData]);
    }

    localStorage.setItem("entries", JSON.stringify(entries));
    setEntryData({ title: "", content: "" });
    setFormValid(false);
  };

  const handleEdit = (index) => {
    setEditingEntry(index);
    setEntryData(entries[index]);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  useEffect(() => {
    setFormValid(entryData.title.trim() !== "" && entryData.content.trim() !== "");
  }, [entryData]);

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
                
                <Link href="/Journal" className="block" prefetch={false}>
                  <Button variant="outline" className="w-full hover:bg-gray-700 transition-colors">
                    Add Journal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-8">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Title</label>
                <input
                  type="text"
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={entryData.title}
                  onChange={(e) => setEntryData({ ...entryData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Content</label>
                <textarea
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  value={entryData.content}
                  onChange={(e) => setEntryData({ ...entryData, content: e.target.value })}
                  rows={4}
                />
              </div>
              <div>
                <Button type="submit" variant="outline" className="w-full hover:bg-gray-700 transition-colors" disabled={!formValid}>
                  {editingEntry !== null ? "Save" : "Submit"}
                </Button>
              </div>
            </div>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {entries.map((entry, index) => (
              <div key={index} className="border-2 border-dashed border-gray-600 rounded-lg p-4 hover:bg-gray-700 transition-colors relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{entry.title}</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-gray-600 transition-colors focus:bg-orange-500 focus:text-white"
                      onClick={() => handleEdit(index)}
                    >
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-gray-600 transition-colors focus:bg-orange-500 focus:text-white"
                      onClick={() => handleDelete(index)}
                    >
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <p className="text-gray-300">{entry.content}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer className="h-16 flex items-center justify-center bg-gray-800 shadow-md">
        <p>&copy; 2024 My Journal App</p>
      </footer>
    </div>
  );
}
