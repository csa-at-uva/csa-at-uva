'use client';
import 'app/globals.css';
import "@fontsource/raleway";

import React from 'react';
import { Grid, Button } from '@mui/material';
import { FaArrowLeftLong } from "react-icons/fa6";
import EventCard from '@components/EventCard';
import ScrollUpButton from '@components/ScrollUpButton';
import Link from 'next/link';

const Past2016_2017 = () => {
  const containerStyle: React.CSSProperties = {
    padding: '0 20px',
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const headerWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: '20px'
  };

  const headerStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'center',
  };

  const cardStyle: React.CSSProperties = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
  };

  return (
    <div style={containerStyle}>
      <div style={headerWrapperStyle}>
        <div className='buttons'>
            <Link href="/events/past/">
              <Button variant="contained">
                <FaArrowLeftLong/>
              </Button>
            </Link>
        </div>
        <div style={{ ...headerStyle }}>
          <h1>2016-2017 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image='/images/2016-2017/events/fourth_year_reception.jpg'
            header="Fourth Year Reception"
            subheading="Apr 26, 2017 | Rotunda MPR"
            text={`It's that time of the year! Come to the rotunda and say goodbye to all the fourth years that are graduating this year. Dinner won't be served during this time, so please make sure to eat beforehand! In addition, the multipurpose room and courtyard is reserved starting 6:30pm so you can come early and take pictures with them! Dress code is smart casual! `}
            style={cardStyle} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image='/images/2016-2017/events/april_gbm.jpg'
            header="April GBM"
            subheading="Apr 19, 2017 | Minor 125"
            text={"Come out to meet our new officer board, as well as learn more about our last few events, such as 4th Year Reception! Superlatives will also be given out!"}
            style={cardStyle} 
          />
        </Grid>
        {/* TODO: */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image='/images/2016-2017/events/mafia_night.jpg'
            header="Mafia Night"
            subheading="Mar 18, 2017 | Chemistry 304"
            text={`The big 4 Mafia families of CSA are in war for total dominance. The Sopranhos, the Randolfos, the Wangsters, and the Paqinos. Each family is trying to assassinate the two heads of one of the families in order to gain dominance of CSA. Someone will be assassinated each round and first to succeed in figuring out who the two heads are and kill them win. There will be challenges each round where the winning family will receive a hint about the other mafia heads. The winning team will receive some sweet treats!`}
            style={cardStyle} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image='/images/2016-2017/events/paint_wars.jpg'
            header="Paint Wars" 
            subheading="Oct 30, 2016 | Nameless Field"
            text={`Get ready for the most colorful combination of dodgeball and capture the flag! Collaborating with Lambda Phi Epsilon and the Asian Student Union, the Chinese Student Association presents Paint Wars! All money will go towards a chosen charity!`}
            style={cardStyle} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image='/images/2016-2017/events/fmf.jpg'
            header="FullMoonFest"
            subheading="Oct 7, 2016 | Student Activities Building"
            text={`FullMoonFest 2016 is finally here!! You will be able to explore a multitude of cultural clubs here at UVA, as well as meet the new first years of the Chinese Student Association. Win cool prizes in our RAFFLES and there will be FREE FOOD at the end!`}
            style={cardStyle} 
          />
        </Grid>
      </Grid>
      <ScrollUpButton /> 
    </div>
  );
};

export default Past2016_2017;
