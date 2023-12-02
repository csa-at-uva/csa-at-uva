'use client';
import 'app/globals.css';
import "@fontsource/raleway";

import React from 'react';
import Image from 'next/image';
import { Grid, Paper  } from '@mui/material';
import YouTubeEmbed from '@/app/components/YouTubeEmbed';
import OfficerCard from '@/app/components/OfficerCard';

import board from '/public/images/2023-2024/officers/board.jpg';
import president from '/public/images/2023-2024/officers/president.jpg';
import vice_president from '/public/images/2023-2024/officers/vice_president.jpg';
import secretary from '/public/images/2023-2024/officers/secretary.jpg';
import treasurer from '/public/images/2023-2024/officers/treasurer.jpg';

import advisors from '/public/images/2023-2024/officers/advisors.jpg';
import community from '/public/images/2023-2024/officers/community.jpg';
import culture from '/public/images/2023-2024/officers/culture.jpg';
import fundraising from '/public/images/2023-2024/officers/fundraising.jpg';
import pr from '/public/images/2023-2024/officers/pr.jpg';
import social from '/public/images/2023-2024/officers/social.jpg';
import sports from '/public/images/2023-2024/officers/sports.jpg';
import webmaster from '/public/images/2023-2024/officers/webmaster.jpg';

const Officers = () => {
  return (
    <div className='content'>
      <div className='header'>
        <h1>2023-2024 Executive and Officer Board</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Image
          src={board}
          alt="Executive and Officer Board"
          height={300} 
        />
        </Grid>
        <Grid item xs={12} sm={6}>
          <YouTubeEmbed embedId="_JDPiBnltew?si=jLEIlZFjt9R4UmWy" embedWidth={600} embedHeight={300} />
        </Grid>
      </Grid>
      <div className='header'>
        <h1>Executive Board</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <h2>President</h2>
          <OfficerCard imagePath={president.src} name="Kelly Gu" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <h2>Vice President</h2>
          <OfficerCard imagePath={vice_president.src} name="Hana Wang" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <h2>Secretary</h2>
          <OfficerCard imagePath={secretary.src} name="Alisha Qian" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <h2>Treasurer</h2>
          <OfficerCard imagePath={treasurer.src} name="Carlie Stewart" />
        </Grid>
      </Grid>
      <div className='header'>
        <h1>Officer Board</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
            <h2>Advisors</h2>
            <h3>Advisors are previous leaders in CSA who use their expertise to ensure all CSA events run smoothly.</h3>
            <OfficerCard imagePath={advisors.src} name="Head Advisors: Safa Khan, Justin Zhang, Emma Mei Andreas, Michelle Kwan (not pictured) Advisors: Ken Chao, Margaux Reppert (not pictured), Isabelle Ngo (not pictured)" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Community</h2>
            <h3>Community chairs oversee all activities pertaining to membership recruiting and retention. They are in charge of the family program, which includes planning family weeks and family competitions.</h3>
            <OfficerCard imagePath={community.src} name="Albert Huang, Kevin Zhang, Coco Clement" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Culture</h2>
            <h3>Culture chairs oversee the planning of all cultural events in order to promote Chinese culture on grounds and within the local Charlottesville community.</h3>
            <OfficerCard imagePath={culture.src} name="Victoria Lu, Nick Liu, Camille Hou" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Fundraising</h2>
            <h3>Fundraising chairs work closely with the Treasurer to plan and organize fundraising events. They are also in charge of obtaining sponsors and raffles for CSA events. </h3>
            <OfficerCard imagePath={fundraising.src} name="James Xu and Laura Abood" />
          </Grid>
          {/* TODO: ADD HISTORIC */}
          <Grid item xs={12} sm={3}>
            <h2>Public Relations</h2>
            <h3>Publicity chairs are in charge of advertising CSA events by creating flyers and Facebook profile advertisements for each event.</h3>
            <OfficerCard imagePath={pr.src} name="Maddie Mark, Danielle Zhang, Kristina Schatz" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Social</h2>
            <h3>Social chairs plan and organize CSA-wide social events.</h3>
            <OfficerCard imagePath={social.src} name="Philip Li and Raymond Ni" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Sports</h2>
            <h3>Sports chairs are responsible for organizing sports events and tournaments such as IM sports games and practices.</h3>
            <OfficerCard imagePath={sports.src} name="Anthony Wang and Kenny Tran" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Webmasters</h2>
            <h3>make the website lolz</h3>
            <OfficerCard imagePath={webmaster.src} name="Justin Zhang and Olivia Seto" />
          </Grid>
      </Grid>
    </div>
  );
};

export default Officers;