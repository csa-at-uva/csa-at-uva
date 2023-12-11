import './globals.css'
import './navbar.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@components/Footer';
import logo from '/public/images/csa_square_logo.png'
import "@fontsource/raleway"

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
  if (typeof window !== 'undefined') {
    // Initialize the Facebook SDK
    if (window.FB) {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: '859184232616360', 
          xfbml: true,
          version: 'v18.0',
        });
        window.FB.AppEvents.logPageView();
      };

    //   (function(d, s, id){
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) {return;}
    //     js = d.createElement(s); js.id = id;
    //     js.src = "https://connect.facebook.net/en_US/sdk.js";
    //     fjs.parentNode.insertBefore(js, fjs);
    //   }(document, 'script', 'facebook-jssdk'));
    // 
    }
    
  }

  return (
    <html lang="en">
        <body className={inter.className}>
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
              <Link href="/gallery">Gallery</Link>
              <Link href="/alumni">Alumni</Link>
            </ul>
          </div>
          {children}
          <Footer></Footer>
        </body>
    </html>
  )
}
