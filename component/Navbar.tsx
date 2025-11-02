// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import LanguageToggle from './LanguageToggle';
import AuthButton from './AuthButton';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <Link href="/" className="font-heading text-2xl text-primary">SK Bebuloh</Link>
        <nav className={`flex-1 ml-4 space-x-4 ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/staff">Staff</Link>
          <Link href="/one-stop">One-Stop</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageToggle />
          <AuthButton />
        </div>
        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      {/* Mobile drawer */}
      {menuOpen && (
        <div className="bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <LanguageToggle />
            <AuthButton />
          </nav>
        </div>
      )}
    </header>
  );
}

