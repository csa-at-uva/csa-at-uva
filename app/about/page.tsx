'use client';
import 'app/globals.css';
import { Grid, Box } from '@mui/material';
import "@fontsource/raleway";

import React from 'react';

const About = () => {
  return (
    <div className='content'>
      <Box
        component="img"
        sx={{
          maxHeight: "33%",
          objectFit: "cover",
          marginBottom: "3%",
        }}
        src="/images/about_cover.jpg"
      />
      <div className='header'>
        <h1>About CSA</h1>
      </div>
      <Grid container>
        <Grid item xs={12} sx={{margin: "auto", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "2%"}}>
          The main goal of the Chinese Student Association at the University of Virginia (CSA@UVA) is to create an atmosphere where Chinese, Chinese-Americans, and all those interested in Chinese culture can come together. From organizing small get-togethers to large-scale events, CSA aims to create a welcoming environment for students to meet others and form meaningful connections. CSA welcomes and encourages people of all ages, races, and backgrounds to participate in, contribute to, and become part of the organization.
        </Grid>
        <Grid item xs={7} sx={{margin: "auto", paddingLeft: "10%", paddingRight: "10%"}}>
          <div className='header'>
            <h2 style={{marginBottom: "2%"}}>Culture</h2>
            <p>CSA@UVA is committed to nurturing cultural consciousness and fostering an appreciation for Chinese culture and heritage. Our annual events include Dollar Dim Sum, an opportunity for friends to gather and taste traditional cuisine, and our performance showcases FullMoonFest and Chinafest, which intricately weave contemporary themes while commemorating the Mid-Autumn Festival and Lunar New Year, respectively. These events feature dances, skits, and fashion walks and showcase a fusion of both traditional and modern facets of Chinese culture.</p>
          </div>
        </Grid>
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
              padding: "5%",
            }}
            src="/images/gallery/chinafest_dragon_justin_2023.JPG"
          />
        </Grid>
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
              padding: "5%",
            }}
            src="/images/gallery/asu_exec_2023.jpg"
          />
        </Grid>
        <Grid item xs={7} sx={{margin: "auto", paddingLeft: "10%", paddingRight: "10%"}}>
          <div className='header'>
            <h2 style={{marginBottom: "2%"}}>Community</h2>
            <p>Beyond cultural celebrations, CSA@UVA is a cornerstone for unity and community-building. The family system serves as a platform for forging lasting connections, where individuals find support, mentorship, and a sense of belonging. Additionally, our involvement in sports and various communal activities serves as a conduit for fostering camaraderie and solidarity among members, creating spaces where bonds are forged and nurtured beyond cultural affiliations.</p>
          </div>

        </Grid>
        <Grid item xs={7} sx={{margin: "auto", paddingLeft: "10%", paddingRight: "10%"}}>
          <div className='header'>
            <h2 style={{marginBottom: "2%"}}>Outreach</h2>
            <p>We participate in cultural events that have a university-wide impact like Culturefest.</p>
          </div>
        </Grid>
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
              padding: "5%",
            }}
            src="/images/gallery/yar_2023.jpg"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
