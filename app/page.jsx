
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300">
      <header className="flex items-center justify-between h-16 px-4 bg-gray-800 shadow-md">
        <div className="flex items-center space-x-4">
          <AppWindowIcon className="w-8 h-8" />
          <h1 className="text-xl font-bold">Journal-page</h1>
        </div>
        <nav className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-gray-200" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-200" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-200" prefetch={false}>
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
              <Button variant="outline" className="w-full">
                <NewspaperIcon className="w-5 h-5 mr-2" />
                Journal
              </Button>
              <Button variant="outline" className="w-full">
                <TimerIcon className="w-5 h-5 mr-2" />
                Timeline
              </Button>
              <Button variant="outline" className="w-full">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Calendar
              </Button>
              <Button variant="outline" className="w-full">
                <LibraryIcon className="w-5 h-5 mr-2" />
                Library
              </Button>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Journals</h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full text-left">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  My Journal
                </Button>
                <Button variant="ghost" className="w-full text-left">
                  <Avatar className="inline-block w-6 h-6 mr-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>RL</AvatarFallback>
                  </Avatar>
                  Running Log
                </Button>
                <Button variant="outline" className="w-full">
                  Add Journal
                </Button>
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
                <div className="flex items-center justify-between bg-orange-500 text-white p-4 rounded-md animate-bounce">
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
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div>Streak</div>
                  <div>Entries</div>
                  <div>Journals</div>
                </div>
                <div className="flex items-center justify-between mt-4">
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

function AppWindowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  )
}


function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}


function LibraryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  )
}


function NewspaperIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  )
}


function NotebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </svg>
  )
}


function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}