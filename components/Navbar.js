import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import {SunIcon, MoonIcon} from "@heroicons/react/24/outline"

export default function Navbar(){
  const [darkMode, setDarkMode] = useContext(GlobalContext);
  return (
    <div className="py-4 max-w-5xl px-4 mx-auto flex gap-x-5 justify-between sticky top-0 z-10 bg-white dark:bg-neutral-900">
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Home</a>
        </Link>
        <Link href="/count">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Count</a>
        </Link>
        <Link href="/name">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Name</a>
        </Link>
        <Link href="/bear">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Bear</a>
        </Link>
        <Link href="/lion">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Lion</a>
        </Link>
        <Link href="/shark">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Shark</a>
        </Link>
        <Link href="/fish">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Fish (Persist)</a>
        </Link>
        <Link href="/fruit">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Fruit</a>
        </Link>
        <Link href="/user">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">User (API)</a>
        </Link>
        <Link href="/repo">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Repo (API)</a>
        </Link>
        <Link href="/pokemon">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Pokemon (Persist)</a>
        </Link>
        <Link href="/student">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Student</a>
        </Link>
      </nav>
      {darkMode ?
        <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
        :
        <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
      }
    </div>
  )
}