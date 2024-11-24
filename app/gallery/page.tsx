"use client";
import "app/globals.css";
import "@fontsource/raleway";

import React from "react";
import { Grid } from "@mui/material";
import PhotoCard from "@/app/components/PhotoCard";
import ScrollUpButton from "@components/ScrollUpButton";

const contents = [
  ["ice_cream_social_2024.jpg", "ice Cream Social (9/7/2024)"],
  ["asu_exec_2023.jpg", "ASU Semi-Formal (10/22/2023)"],
  ["asu_exec_2023.jpg", "ASU Semi-Formal (10/22/2023)"],
  ["asu_group_jan_2023.JPG", "2023-24 Exec at ASU Semi-Formal (10/22/2023)"],
  ["asu_group_oct_2023.jpg", "Pumpkin Painting (10/14/2023)"],
  ["basketball_2022.JPG", "YAR Tailgate (10/7/2023)"],
  ["chinafest_dragon_2023.JPG", "General Body Meeting (10/4/2023)"],
  [
    "chinafest_fashionshow_2023.JPG",
    "Class of 2026 at Sunset Series (9/14/2023)",
  ],
  ["chinafest_fourthyears_2023.JPG", "Downtown Night (9/3/2023)"],
  ["chinafest_fribbon_2023.JPG", "Downtown Night (9/3/2023)"],
  ["chinafest_fym_2023.JPG", "Glorious Goats at Meet the Parents (9/2/2023)"],
  ["chinafest_girlsmodern_2023.JPG", "Fourth Years at Chinafest (2/25/2023)"],
  ["chinavasian_2023.jpg", "Girls Modern at Chinafest (2/25/2023)"],
  ["comm_dinner_2022.JPG", "First Year Modern at Chinafest (2/25/2023)"],
  ["dds_group1_2022.JPG", "Fribbon Dance at Chinafest (2/25/2023)"],
  ["dds_group2_2022.JPG", "Fashion Show at Chinafest (2/25/2023)"],
  ["downtown_group1_2023.jpg", "Dragon Dance at Chinafest (2/25/2023)"],
  ["downtown_group2_2023.jpg", "ChinaVAsian at Virginia Tech (2/4/2023)"],
  ["fmf_2022.JPG", "ASU Semi-Formal (1/27/2023)"],
  ["football_2022.JPG", "Frisbee IM-Rec Champs (12/6/2022)"],
  ["fourth_year_reception_2022.jpg", "Dollar Dim Sum (12/3/2022)"],
  ["frisbee_2022.JPG", "Dollar Dim Sum (12/3/2022)"],
  ["gbm_2023.jpg", "Basketball Practice (10/30/2022)"],
  ["mtp_2023.jpg", "Traditional Partner Dance at FullMoonFest (10/22/2022)"],
  ["pumpkin_painting_2023.JPG", "Football Practice (10/16/2022)"],
  ["smores_2022.jpg", "Class of 2022 at YAR Tailgate (10/8/2022)"],
  ["sunset_series_2023.jpg", "Community Dinner at O'Hill (9/14/2022)"],
  ["yar_2023.jpg", "S'mores Night (8/31/2022)"],
  ["yar_alum_2022.JPG", "Class of 2022 at Fourth Year Reception (5/1/2022)"],
];

import asu_group_oct_2024 from "/public/images/gallery/asu_group_oct_2024.jpg";
import yar_2024 from "/public/images/gallery/yar_2024.jpg";
import ice_cream_social_2024 from "/public/images/gallery/ice_cream_social_2024.jpg";
import asu_exec_2023 from "/public/images/gallery/asu_exec_2023.jpg";
import asu_group_jan_2023 from "/public/images/gallery/asu_group_jan_2023.JPG";
import asu_group_oct_2023 from "/public/images/gallery/asu_group_oct_2023.jpg";
import basketball_2022 from "/public/images/gallery/basketball_2022.JPG";
import chinafest_dragon_2023 from "/public/images/gallery/chinafest_dragon_2023.JPG";
import chinafest_fashionshow_2023 from "/public/images/gallery/chinafest_fashionshow_2023.JPG";
import chinafest_fourthyears_2023 from "/public/images/gallery/chinafest_fourthyears_2023.JPG";
import chinafest_fribbon_2023 from "/public/images/gallery/chinafest_fribbon_2023.JPG";
import chinafest_fym_2023 from "/public/images/gallery/chinafest_fym_2023.JPG";
import chinafest_girlsmodern_2023 from "/public/images/gallery/chinafest_girlsmodern_2023.JPG";
import chinavasian_2023 from "/public/images/gallery/chinavasian_2023.jpg";
import comm_dinner_2022 from "/public/images/gallery/comm_dinner_2022.JPG";
import dds_group1_2022 from "/public/images/gallery/dds_group1_2022.JPG";
import dds_group2_2022 from "/public/images/gallery/dds_group2_2022.JPG";
import downtown_group1_2023 from "/public/images/gallery/downtown_group1_2023.jpg";
import downtown_group2_2023 from "/public/images/gallery/downtown_group2_2023.jpg";
import fmf_2022 from "/public/images/gallery/fmf_2022.JPG";
import football_2022 from "/public/images/gallery/football_2022.JPG";
import fourth_year_reception_2022 from "/public/images/gallery/fourth_year_reception_2022.jpg";
import frisbee_2022 from "/public/images/gallery/frisbee_2022.JPG";
import gbm_2023 from "/public/images/gallery/gbm_2023.jpg";
import mtp_2023 from "/public/images/gallery/mtp_2023.jpg";
import pumpkin_painting_2023 from "/public/images/gallery/pumpkin_painting_2023.JPG";
import smores_2022 from "/public/images/gallery/smores_2022.jpg";
import sunset_series_2023 from "/public/images/gallery/sunset_series_2023.jpg";
import yar_2023 from "/public/images/gallery/yar_2023.jpg";
import yar_2022 from "/public/images/gallery/yar_2022.JPG";

const Gallery = () => {
  return (
    <div className="content">
      <div className="header">
        <h1>Gallery</h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={asu_group_oct_2024.src}
            name="ASU Semi-Formal (10/18/2024)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={yar_2024.src}
            name="YAR Tailgate (10/5/2024)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={ice_cream_social_2024.src}
            name="Ice Cream Social (9/7/2024)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={asu_group_oct_2023.src}
            name="ASU Semi-Formal (10/22/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={asu_exec_2023.src}
            name="2023-24 Exec at ASU Semi-Formal (10/22/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={pumpkin_painting_2023.src}
            name="Pumpkin Painting (10/14/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard imagePath={yar_2023.src} name="YAR Tailgate (10/7/2023)" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={gbm_2023.src}
            name="General Body Meeting (10/4/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={sunset_series_2023.src}
            name="Class of 2026 at Sunset Series (9/14/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={downtown_group2_2023.src}
            name="Downtown Night (9/3/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={downtown_group1_2023.src}
            name="Downtown Night (9/3/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={mtp_2023.src}
            name="Glorious Goats at Meet the Parents (9/2/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={chinafest_fourthyears_2023.src}
            name="Fourth Years at Chinafest (2/25/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={chinafest_girlsmodern_2023.src}
            name="Girls Modern at Chinafest (2/25/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={chinafest_fym_2023.src}
            name="First Year Modern at Chinafest (2/25/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={chinafest_fribbon_2023.src}
            name="Fribbon Dance at Chinafest (2/25/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={chinafest_fashionshow_2023.src}
            name="Fashion Show at Chinafest (2/25/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={chinafest_dragon_2023.src}
            name="Dragon Dance at Chinafest (2/25/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={chinavasian_2023.src}
            name="ChinaVAsian at Virginia Tech (2/4/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={asu_group_jan_2023.src}
            name="ASU Semi-Formal (1/27/2023)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={frisbee_2022.src}
            name="Frisbee IM-Rec Champs (12/6/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={dds_group2_2022.src}
            name="Dollar Dim Sum (12/3/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={dds_group1_2022.src}
            name="Dollar Dim Sum (12/3/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={basketball_2022.src}
            name="Basketball Practice (10/30/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={fmf_2022.src}
            name="Traditional Partner Dance at FullMoonFest (10/22/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={football_2022.src}
            name="Football Practice (10/16/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={yar_2022.src}
            name="Class of 2022 at YAR Tailgate (10/8/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={comm_dinner_2022.src}
            name="Community Dinner at O'Hill (9/14/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={smores_2022.src}
            name="S'mores Night (8/31/2022)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhotoCard
            imagePath={fourth_year_reception_2022.src}
            name="Class of 2022 at Fourth Year Reception (5/1/2022)"
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  );
};

export default Gallery;
