'use client';
import 'app/globals.css';
import "@fontsource/raleway";

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Grid, Button } from '@mui/material';
import { BiChevronDown } from 'react-icons/bi'; 
import Link from 'next/link';

import background from '/public/images/mountains.png';

function Archive() {
  const buttonStyles = {
    padding: '20px 30px',
    width: '100%',
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='background' style={backgroundImageStyle}>
      <h1>Archive</h1>
        <Accordion style={{marginTop: '20px'}}>
          <AccordionSummary
            expandIcon={<BiChevronDown style={{ fontSize: '2rem', color: '#7b1500' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>2023</h2>
          </AccordionSummary>
          <AccordionDetails>
            <div className="buttons">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/17k1Y7trD0glBA_G3shUFTWZ2otxYKnOL?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                RTC Ice Skating (1/4/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=c33c399a9e&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                January GBM (1/18/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/13H9pBXC-cfFbQQwB1lpygdLmtbyVah65?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Lunar New Year Event / Chinafest Showcase (1/21/2023)
                            </Button>
                        </Link>
                    </Grid>     
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1pHr3-K-weeOtKJ-f9tVkIWFNPKU54VVp?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                ASU Semi-Formal (1/27/2023)
                            </Button>
                        </Link>
                    </Grid>     
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=84e2682d7b&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                February GBM (2/1/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1NYmfmw1DsqFuuUgCxttpuGIPSfIpUdCq?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                ChinaVAsian (2/6/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1iry03hXnpFcW5hVyuJZgGy1LUBDdUr9Z?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Chinafest (2/27/2023)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1JKabO_Mwqn5C5Nmr5XGFH7u462XJ0Qyt?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                March GBM (3/7/2023)
                            </Button>
                        </Link>
                    </Grid>      
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1HEyjEAr6cmZl47JAd6LqMl1UrEsiIQWl?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                April GBM (4/20/2023)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=3c7ddfa619&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Fourth Year Reception (4/30/2023)
                            </Button>
                        </Link>
                    </Grid>    
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1OL2BXskxUtYlyb8_IPVyeVxx1biw2Fww?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Beach Week Photoshoot (5/17/2023)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1-0x9jxxWJHg4jo2CRoyKg9jUjHXHEtOf?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                First GBM (8/30/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1NnGwE6FEMdjbXZhgwsQgu7eD8_tCd3pV?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Ice Cream Social (9/2/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1-1xxstwsss2fQ6XO71u57oFIrXHxtB_W?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Meet the Parents (9/2/2023)
                            </Button>
                        </Link>
                    </Grid>     
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1-7QPg5KPqB2NFxsG6iFHWOAht-OY237g?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Downtown Night (9/3/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1Hf4j8D6BiudzReRsOYdIRNiIFkffCbqL?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                FullMoonFest Showcase (9/6/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1Dk1kihhwrj5exWlTBfMqkjXjOyfhcJLM?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Crafts Night (9/10/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1gaOJnjiZ73HKH-db3gvViuBQtUeqNVMq?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Sunset Series at Carter Mountain (9/14/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1YrcDJY-F2YracJ5D_DYUimhVfaBdIdJs?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Fall 2023 Sports Media (9/15/2023-10/24/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=79abf9d9cf&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                October GBM (10/4/2023)
                            </Button>
                        </Link>
                    </Grid>     
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=2346463270&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                YAR Tailgate (10/7/2023)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a674324198&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Pumpkin Painting (10/14/2023)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=3ab36bb1b1&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                ASU Semi-Formal (10/22/2023)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=2f5afb010f&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                FullMoonFest (10/28/2023)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=8c9ef6e86a&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                November GBM (11/1/2023)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=d7069f4d1c&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Thanksgiving Potluck (11/14/2023)
                            </Button>
                        </Link>
                    </Grid>    
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1lFOHypL3k2QJDXaIyVFCiXb5H8qH1ea9?usp=sharing  ">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Dollar Dim Sum (12/1/2023)
                            </Button>
                        </Link>
                    </Grid>                  
                </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{marginBottom: '20px'}}>
          <AccordionSummary
            expandIcon={<BiChevronDown style={{ fontSize: '2rem', color: '#7b1500' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>2022</h2>
          </AccordionSummary>
          <AccordionDetails>
            <div className="buttons">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1qk5cGsrDOMXMvYLdYXNWo4cvReZyXJxA?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Fourth Year Reception (5/1/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1bqHFE-qj4biYnBVzVOIFVVe2401pUzvi?usp=drive_link">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Beach Week Photoshoot (5/16/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a409fff355&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Activities Fair (8/28/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1CROVAysf1e51fkgHDoQO_yInTDvMO0qU?usp=drive_link">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                First GBM (8/31/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=344c1b60ed&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Meet the Parents (9/2/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=12ca934e7a&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Downtown Night (9/3/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1htnnDtwn6yKIGmwLhukTZ5_kDboWXSPi?usp=drive_link">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                FullMoonFest Showcase (9/7/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/12Fu9ko_nJmosBWA1q1ExDd7GOIUDgbgb?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Arts and Crafts (9/11/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1kYxj-EjRzSpfyWJbUvqDLPSarHa8jEJu?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Community Dinner (9/14/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1viU5zMrRcGsLldezXDxT2t2LLzzxq8HA?usp=drive_link">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Sunset Series at Carter Mountain (9/15/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1viU5zMrRcGsLldezXDxT2t2LLzzxq8HA?usp=drive_link">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Mid-Autumn Festival Potluck (9/16/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a6737e6bc1&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Paint Wars (9/18/2022)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/19q0HM1ICjjHQ8jBQS6mM4xlk-_w9h7hb?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Fall 2022 Sports Media (9/25/2022-12/6/2022)
                            </Button>
                        </Link>
                    </Grid>    
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a6737e6bc1&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                October GBM (10/5/2022)
                            </Button>
                        </Link>
                    </Grid>    
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1U8BQLDr9jN53bdUGqpj7Qoj0-qUNmXrf?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                YAR Tailgate (10/7/2022)
                            </Button>
                        </Link>
                    </Grid>     
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1oZEl0Mmm2ZhFhc_41934RiT6mP-1oXjR?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Community Dinner (10/12/2022)
                            </Button>
                        </Link>
                    </Grid>       
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=7283c5659d&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                FullMoonFest (10/21/2022)
                            </Button>
                        </Link>
                    </Grid>  
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1bvM2bybDEaSD3L5MYLMzskBtYAvJKIFL?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Culturefest (10/29/2022)
                            </Button>
                        </Link>
                    </Grid> 
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=901ffee72e&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                November GBM (11/2/2022)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1Hz6eXskGFjnysXkTNmuun4rdYOEmx7tX?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Chinaball (11/13/2022)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=d76d715972&e=f5afb523ef">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                Dollar Dim Sum (12/4/2022)
                            </Button>
                        </Link>
                    </Grid>   
                    <Grid item xs={12} sm={3}>
                        <Link href="https://drive.google.com/drive/folders/1yLN9zZyoAsUiEth0nXtLPPGHyLsEQ9AK?usp=sharing">
                            <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                                December GBM (12/7/2022)
                            </Button>
                        </Link>
                    </Grid>       
                </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
        <div className="buttons">
            <Link href="https://www.facebook.com/csa.uva/photos_albums">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                Facebook Group Photo Albums (2013-2022)
              </Button>
            </Link>
        </div>
      </div>
  );
}

export default Archive;
