import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Link, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', py: 4, mt: 4, borderTop: '1px solid #ddd' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Ofertas y Promociones
            </Typography>
            <Typography>No te pierdas nuestras ofertas!</Typography>
            <TextField
              id="email-input"
              label="Ingresa tu correo electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
              Suscribirse
            </Button>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Envíos y Devoluciones
            </Typography>
            <Typography>Información sobre nuestras políticas de envíos y devoluciones.</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces útiles
            </Typography>
            <Link href="#" color="inherit">
              Preguntas Frecuentes
            </Link>
            <Divider sx={{ my: 1 }} />
            <Link href="#" color="inherit">
              Aviso de Privacidad
            </Link>
            <Divider sx={{ my: 1 }} />
            <Link href="#" color="inherit">
              Términos y Condiciones
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="textSecondary">
            © 2024 Nombre de tu empresa
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="primary" href="#" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" href="#" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary" href="#" target="_blank">
              <WhatsAppIcon />
            </IconButton>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
