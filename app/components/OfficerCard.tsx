import 'app/globals.css';
import "@fontsource/raleway";

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface OfficerCardProps {
  imagePath: string;
  name: string;
}

const OfficerCard: React.FC<OfficerCardProps> = ({ imagePath, name }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        image={imagePath}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="p">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OfficerCard;
