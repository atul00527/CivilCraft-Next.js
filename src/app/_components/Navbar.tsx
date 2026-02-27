import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='h-16 bg-gray-300 text-white px-5 flex items-center justify-between'>
      <h1>CricCraft</h1>
      <nav className='flex items-center gap-2' >
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/house"}>House</Link>
      </nav>

      <Link href={"/enquiry"}>Enquiry Now</Link>

    </header>
  )
}

export default Navbar
