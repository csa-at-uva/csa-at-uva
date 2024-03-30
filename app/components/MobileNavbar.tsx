"use client";

import {AppBar, Box, Toolbar, Container, Menu, MenuItem, Typography, IconButton} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React from "react"
import Link from 'next/link'
import logo from '/public/images/csa_square_logo.png'
import Image from 'next/image'

const MobileNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElNav(event.currentTarget); }
  const handleCloseNavMenu = () => { setAnchorElNav(null); }

  return (
    <Box className="mobile-navbar" sx={{ display: {xs: "flex", md: "none" } }}>
      <Link href="/" className="main-mobile-link">
        <Image src={logo} alt={'CSA'} width={68} height={68}/>
      </Link>
      <IconButton
        size="large"
        onClick={handleOpenNavMenu}
        color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ flexDirection: "column", display: {xs: "flex", md: "none"} }}
      >
        <MenuItem>
          <Link href="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <div className="dropdown">
            <span className="dropdown-link">Events</span>
            <div className="dropdown-content">
              <Link href="/events/upcoming">Upcoming</Link>
              <Link href="/events/past">Past</Link>
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <Link href="/families">Families</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/officers">Officers</Link>
        </MenuItem>
        <MenuItem>
          <div className="dropdown">
            <Link href="/gallery">Gallery</Link>
            <div className="dropdown-content">
              <Link href="/gallery/archive">Archive</Link>
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <Link href="/alumni">Alumni</Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default MobileNavbar;
