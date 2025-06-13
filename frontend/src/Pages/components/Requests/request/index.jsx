import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import './style.css';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Request() {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardHeader
        avatar={
          <img  className='immg' src ="https://images.pexels.com/photos/32262818/pexels-photo-32262818/free-photo-of-individu-elegant-appuye-contre-un-mur-sombre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        }
        title= "Iskander Brahim"
        subheader="send friend request"
        
      />
      <Stack direction="row" spacing={2} className='buttons'>
      <Button variant="contained" >
        Confirmer
      </Button>
      <Button variant="outlined" >
        Supprimer
      </Button>
     
    </Stack>
      
    </Card>
  );
}
