import React from 'react';
import { Box, Typography } from '@mui/material';

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
        UNIVERSIDAD NACIONAL DE INGENIERIA UNI -- SISTEMA DE INVENTARIO UNIVERSITARIO SIU
      </Typography>
    </Box>
  );
};


