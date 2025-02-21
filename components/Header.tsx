'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div className='flex justify-between shadow-lg mb-1 items-center text-white bg-red-600'>
            <div className='ml-5'>
                Header:
            </div>
            <div className='flex items-center gap-24 m-5'>
                <p>
                    <Link className={`p-3 ${pathname === "/" ? "underline" : ""}`} href="/">Home</Link>
                </p>
                <p>
                    <Link className={`p-3 ${pathname === "/about" ? "underline" : ""}`} href="/about">About</Link>
                </p>
                <p>
                    <Link className={`p-3 ${pathname === "/blog" ? "underline" : ""}`} href="/blog">Blog</Link>
                </p>
                <p>
                    <Link className={`p-3 ${pathname === "/contact" ? "underline" : ""}`} href="/contact">Contact</Link>
                </p>
                <button className='p-3 bg-cyan-800 hover:bg-cyan-950 shadow-lg rounded-lg text-white cursor-pointer transition' 
                type="button" onClick={() => router.push('/auth/login')}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header
