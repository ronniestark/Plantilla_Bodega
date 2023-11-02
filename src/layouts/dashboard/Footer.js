import React from 'react';
import { Box, Typography } from '@mui/material';
import { Logo } from 'src/components/logo';


export const Footer = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: '#1A237E', // Color de fondo del footer
        color: 'white', // Color del texto
        textAlign: 'center',
        padding: '1rem', // Espaciado interior
      }}
    >
      <Typography variant="body2">
        UNIVERSIDAD NACIONAL DE INGENIERIA UNI -- &nbsp;&nbsp;
        <img src={'/assets/logos/UNI.png'}
        width='30'
        height='20'
         />
       &nbsp;&nbsp; -- SISTEMA DE INVENTARIO UNIVERSITARIO SIU
      </Typography>
    </Box>
  );
};


