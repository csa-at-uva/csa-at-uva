import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface OfficerCardProps {
  imagePath: string;
  name: string;
}

const OfficerCard: React.FC<OfficerCardProps> = ({ imagePath, name }) => {
  const textLines = name.split('\n').map((line, index) => (
    <Typography key={index} variant="body1">
      {line}
    </Typography>
  ));

  return (
    <Card>
      <CardMedia component="img" height="100" image={imagePath} alt={name} />
      <CardContent>{textLines}</CardContent>
    </Card>
  );
};

export default OfficerCard;
