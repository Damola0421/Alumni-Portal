import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa"
import "@/styles/globals.css";


const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <header className="text-2xl font-bold cursor-pointer">
        <img
          src="/logo.png"
          alt="logo"
          height={90}
          width={90}
          />
        </header>
        
        
        <div className="hidden md:flex font-bold space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/event" className="hover:underline">Events</Link>
          <Link href="/register" className="hover:underline">Register</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>

        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/register" className="hover:underline">Register</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
        </div>
      )}
    </nav>
  );
};

export default Home;
