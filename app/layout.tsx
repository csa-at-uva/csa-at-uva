import './globals.css'
import './navbar.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@components/Footer';
import logo from '/public/images/csa_square_logo.png'
import "@fontsource/raleway"
import {AppBar, Box, Toolbar, Container, Menu, Typography, IconButton} from "@mui/material"
import React from "react"
import MobileNavbar from '@components/MobileNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSA@UVA',
  description: 'Chinese Student Association at University of Virginia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body className={inter.className}>
          {/* normal navbar */}
          <Box sx={{ display: {xs: "none", md: "flex" } }}>
            <div className='entire_nav'>
              <Link href="/">
                <Image src={logo} alt={'CSA'} width={68} height={68}/>
              </Link>
              <ul className='navbar' id="navbar">
                <Link href="/about">About</Link>
                <div className="dropdown">
                  <span className="dropdown-link">Events</span>
                  <div className="dropdown-content">
                    <Link href="/events/upcoming">Upcoming</Link>
                    <Link href="/events/past">Past</Link>
                  </div>
                </div>
                <Link href="/families">Families</Link>
                <Link href="/officers">Officers</Link>
                <div className="dropdown">
                  <Link href="/gallery">Gallery</Link>
                  <div className="dropdown-content">
                    <Link href="/gallery/archive">Archive</Link>
                  </div>
                </div>
                <Link href="/alumni">Alumni</Link>
              </ul>
            </div>
          </Box>

          {/* mobile navbar */}
          <MobileNavbar />
          {children}
        </body>
    </html>
  )
}
