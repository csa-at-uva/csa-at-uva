import "@fontsource/raleway";
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface EventCardProps {
  image?: string;
  header: string;
  subheading: string;
  text: string;
  style?: React.CSSProperties;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  header,
  subheading,
  text,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyles: React.CSSProperties = {
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
    overflow: 'hidden' 
  };

  const mediaStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    display: 'block',
  };

  const overlayStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
    color: isHovered ? 'black' : 'transparent',
    backgroundColor: isHovered ? 'white' : 'transparent',
    padding: '20px', // Increase the padding for a wider overlay
    borderRadius: '5px',
    display: isHovered ? 'inline-block' : 'none',
    width: '90%', // Set a wider width for the overlay
    maxWidth: '400px', // Limit the maximum width for better readability
    margin: '0 auto', // Center the overlay horizontally
  };

  // Splitting text into an array based on line breaks ("\n") and mapping them to Typography components
  const textLines = text.split('\n').map((line, index) => (
    <Typography key={index} variant="body1">
      {line}
    </Typography>
  ));

  return (
    <Card
      style={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        style={mediaStyles}
        image={image}
        alt="Card Image"
      />
      <CardContent style={overlayStyles}>
        <div>
          <Typography variant="h5">{header}</Typography>
          <Typography variant="subtitle1">{subheading}</Typography>
          {textLines} {/* Render mapped Typography components */}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
