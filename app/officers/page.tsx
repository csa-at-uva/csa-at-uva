'use client';
import 'app/globals.css';
import "@fontsource/raleway";

import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
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
import historic from '/public/images/2023-2024/officers/historic.jpg';
import pr from '/public/images/2023-2024/officers/pr.jpg';
import social from '/public/images/2023-2024/officers/social.jpg';
import sports from '/public/images/2023-2024/officers/sports.jpg';
// import webmaster from '/public/images/2023-2024/officers/webmaster.jpg';

const Officers = () => {
  return (
    <div className='content'>
      <div className='header'>
        <h1>2023-2024 Executive and Officer Board</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='ImageContainer'>
            <Image
              src={board}
              alt="Executive and Officer Board"
              height={300}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='YouTubeEmbedContainer'>
            <YouTubeEmbed embedId="_JDPiBnltew?si=jLEIlZFjt9R4UmWy" embedWidth={500} embedHeight={300} />
          </div>
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
            <OfficerCard 
              imagePath={advisors.src} 
              name={`Head Advisors: Safa Khan, Justin Zhang, Emma Mei Andreas, and Michelle Kwan \n Advisors: Ken Chao, Margaux Reppert, and Isabelle Ngo`}
              description="Advisors are previous leaders in CSA who use their expertise to ensure all CSA events run smoothly."
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Community</h2>
            <OfficerCard 
              imagePath={community.src} 
              name="Albert Huang, Kevin Zhang, and Coco Clement" 
              description="Community chairs oversee all activities pertaining to membership recruiting and retention. They are in charge of the family program, which includes planning family weeks and family competitions."
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Culture</h2>
            <OfficerCard 
              imagePath={culture.src} 
              name="Victoria Lu, Nick Liu, and Camille Hou" 
              description='Culture chairs oversee the planning of all cultural events in order to promote Chinese culture on grounds and within the local Charlottesville community.'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Fundraising</h2>
            <OfficerCard 
              imagePath={fundraising.src} 
              name="James Xu and Laura Abood" 
              description='Fundraising chairs work closely with the Treasurer to plan and organize fundraising events. They are also in charge of obtaining sponsors and raffles for CSA events.'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Historic</h2>
            <OfficerCard 
              imagePath={historic.src} 
              name="Kyra Li, Eddie Wei, and Lizzie Chu" 
              description='Historic chairs are responsible for taking pictures and videos at all CSA events as well as creating promotional and monthly recap videos during the year.'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Public Relations</h2>
            <OfficerCard 
              imagePath={pr.src} 
              name="Maddie Mark, Danielle Zhang, and Kristina Schatz" 
              description='Publicity chairs are in charge of advertising CSA events by creating flyers and Facebook profile advertisements for each event.'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Social</h2>
            <OfficerCard 
              imagePath={social.src} 
              name="Philip Li and Raymond Ni" 
              description='Social chairs plan and organize CSA-wide social events.'
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <h2>Sports</h2>
            <OfficerCard 
              imagePath={sports.src} 
              name="Anthony Wang and Kenny Tran" 
              description='Sports chairs are responsible for organizing sports events and tournaments such as IM sports games and practices.'
            />
          </Grid>
          {/* <Grid item xs={12} sm={3}>
            <h2>Webmasters</h2>
            <OfficerCard imagePath={webmaster.src} name="Justin Zhang and Olivia Seto" />
          </Grid> */}
      </Grid>
    </div>
  );
};

export default Officers;