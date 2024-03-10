'use client';
import 'app/globals.css';
import "@fontsource/raleway";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { InstagramEmbed } from 'react-social-media-embed';

import dogs from '/public/images/2023-2024/families/dogs.jpg';
import goats from '/public/images/2023-2024/families/goats.jpg';
import snakes from '/public/images/2023-2024/families/snakes.jpg';

const Families = () => {
  return (
    <div className='content'>
      <div className='header'>
        <h1>Families</h1>
        <h3>Every year, all members are assigned to different families. Families play a major role in CSA&apos;s social activities, from organizing family events to creating a sense of community for both new and old members. The family system cultivates strong connections, fostering friendships and shared experiences that define the essence of the CSA.</h3>
      </div>
      <Swiper slidesPerView={1} loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className='header'>
            <h2>Divine Dogs</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src={dogs}
              alt="Dogs' family picture at Sunset Series"
              height={375}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CyL2cQNODIO/"
              height={375}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='header'>
            <h2>Glorious Goats</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src={goats}
              alt="Goats' family picture at Sunset Series"
              height={375}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CwxjbZzAf69/"
              height={375}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='header'>
            <h2>Snazzy Snakes</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src={snakes}
              alt="Snakes' family picture at Sunset Series"
              height={375}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/Cwu8kU-OlpH/"
              height={375}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Families;
