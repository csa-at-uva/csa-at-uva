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
    <footer className="bg-white py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/csa_tassel_logo.png" alt="Logo" className="h-12 w-12 mr-4" />
          <p className="text-lg font-semibold">CSA@UVA</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Link href="https://www.facebook.com/csa.uva" className="mr-2">
              <Image src={facebook} alt={'Facebook icon'} width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/groups/csaatuva" className="mr-2">
              <Image src={facebook_group} alt={'Facebook group icon'} width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com/csaatuva/" className="mr-2">
              <Image src={instagram} alt={'Instagram icon'} width={24} height={24} />
            </Link>
            <Link href="https://www.youtube.com/@TheCSAatUVA">
              <Image src={youtube} alt={'YouTube icon'} width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
