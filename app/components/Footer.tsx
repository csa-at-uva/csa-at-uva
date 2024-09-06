import 'app/globals.css';
import "@fontsource/raleway";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import facebook from '/public/images/facebook.png';
import facebook_group from '/public/images/facebook_group.png';
import instagram from '/public/images/instagram.png';
import youtube from '/public/images/youtube.png';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t-2 border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/images/csa_tassel_logo.png" alt="Logo" width={40} height={36} className="mr-2"/>
          <p className="text-lg font-semibold">Chinese Student Association at the University of Virginia</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com/csa.uva" className="mr-2">
            <Image src={facebook} alt={'Facebook icon'} width={36} height={36} />
          </Link>
          <Link href="https://www.facebook.com/groups/csaatuva" className="mr-2">
            <Image src={facebook_group} alt={'Facebook group icon'} width={36} height={36} />
          </Link>
          <Link href="https://www.instagram.com/csaatuva/" className="mr-2">
            <Image src={instagram} alt={'Instagram icon'} width={36} height={36} />
          </Link>
          <Link href="https://www.youtube.com/@TheCSAatUVA">
            <Image src={youtube} alt={'YouTube icon'} width={36} height={36} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
