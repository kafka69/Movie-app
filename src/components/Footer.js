import React from 'react';
import { Box, Grid, Typography, Link, List, ListItem, ListItemText, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 20px' }}>
      <Grid container spacing={5}>
        {/* Popular Categories */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
            Popular Categories
          </Typography>
          <FooterList items={['Fashion', 'Electronic', 'Cosmetic', 'Health', 'Watches']} />
        </Grid>

        {/* Products */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
            Products
          </Typography>
          <FooterList items={['Prices Drop', 'New Products', 'Best Sales', 'Contact Us', 'Sitemap']} />
        </Grid>

        {/* Our Company */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
            Our Company
          </Typography>
          <FooterList items={['Delivery', 'Legal Notice', 'Terms And Conditions', 'About Us', 'Secure Payment']} />
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
            Services
          </Typography>
          <FooterList items={['Prices Drop', 'New Products', 'Best Sales', 'Contact Us', 'Sitemap']} />
        </Grid>

        {/* Contact */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
            Contact
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography>419 State 414 Rte Beaver Dams, New York (NY), 14812, USA</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography>(607) 936-8058</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography>Example@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Payment Methods */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <img src="/images/pngegg.png" alt="Payment Methods" style={{ maxWidth: '30%', height: 'auto' }} />
      </Box>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 2, borderTop: '1px solid #333', pt: 2 }}>
        <Typography variant="body2">Copyright © Anon All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

// Footer List Component
const FooterList = ({ items }) => (
  <List dense>
    {items.map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemText primary={item} sx={{ color: '#b3b3b3' }} />
      </ListItem>
    ))}
  </List>
);

export default Footer;
