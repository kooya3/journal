"use client"

import Link from "next/link"
import { Button } from "../components/ui/buttons"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { AppWindowIcon, FilePenIcon, ShareIcon, CalendarIcon, BookIcon, NotebookIcon, LibraryIcon, FlameIcon, RefreshCwIcon, NewspaperIcon, PlusIcon, TimerIcon, XIcon } from './constants';

export default function Component() {
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
            <div className="space-y-4 gap-3">
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
               
                <Link href="/Journal" className="block" prefetch={false}><Button variant="outline" className="w-full">
                  Add Journal
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white shadow-lg">Journal Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between bg-slate-500 text-white p-4 rounded-md ">
                  <div className="text-2xl font-bold">
                    <FlameIcon className="w-8 h-8 animate-bounce" />
                    2
                  </div>
                  <div className="text-2xl font-bold">
                    <NotebookIcon className="w-8 h-8 animate-bounce" />
                    15
                  </div>
                  <div className="text-2xl font-bold">
                    <BookIcon className="w-8 h-8 animate-bounce" />
                    3
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 ">
                  <div>Streak</div>
                  <div>Entries</div>
                  <div>Journals</div>
                </div>
                <div className="flex items-center justify-between mt-4 rounded-md">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-2xl font-bold text-white">2</div>
                  <div className="text-2xl font-bold text-white">5</div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div>Total Hours</div>
                  <div>Current Streak</div>
                  <div>Longest Streak</div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
                    <RefreshCwIcon className="w-5 h-5" />
                    Refresh
                  </Button>
                  <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
                    <FilePenIcon className="w-5 h-5" />
                    Edit
                  </Button>
                  <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
                    <ShareIcon className="w-5 h-5" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-white">Quotes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">
                    We cannot solve problems with the kind of thinking we employed when we came up with them.
                  </p>
                  <Button variant="outline" className="ml-4 bg-orange-500 text-white hover:bg-orange-600">
                    <RefreshCwIcon className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
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