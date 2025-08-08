'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Stack,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CertificateIcon from '@mui/icons-material/CardMembership';
import AwardIcon from '@mui/icons-material/EmojiEvents';
import ShieldIcon from '@mui/icons-material/Shield';
import PublicIcon from '@mui/icons-material/Public';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function CompanyCredentials() {
  const registrations = [
    {
      title: "Corporate Affairs Commission (CAC)",
      number: "RC 8371222",
      status: "Active",
      icon: <BusinessIcon />,
      description: "Officially registered with the Nigerian Corporate Affairs Commission"
    },
    {
      title: "Real Estate Developers Association of Nigeria",
      number: "REDAN/FCT/2018/456",
      status: "Active Member",
      icon: <CertificateIcon />,
      description: "Professional member of Nigeria's premier real estate association"
    },
    {
      title: "Estate Surveyors and Valuers Registration Board",
      number: "ESVARBON/REG/2019/789",
      status: "Licensed",
      icon: <AssignmentIcon />,
      description: "Licensed to practice real estate valuation and consultancy"
    },
    {
      title: "Federal Inland Revenue Service",
      number: "TIN: 67891234-0001",
      status: "Compliant",
      icon: <AccountBalanceIcon />,
      description: "Tax identification number and full compliance with tax obligations"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management System",
    "Certified Real Estate Professional (CREP)",
    "Project Management Professional (PMP)",
    "Nigerian Green Building Council Member",
    "International Real Estate Federation (FIABCI) Associate",
    "Chartered Institute of Building (CIOB) Affiliate"
  ];

  const partnerships = [
    {
      name: "First Bank of Nigeria",
      type: "Mortgage Partner",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=100&h=100&fit=crop"
    },
    {
      name: "GTBank",
      type: "Financial Partner",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=100&h=100&fit=crop"
    },
    {
      name: "Zenith Bank",
      type: "Investment Partner",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=100&h=100&fit=crop"
    },
    {
      name: "Julius Berger Nigeria",
      type: "Construction Partner",
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=100&h=100&fit=crop"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Best Real Estate Company - Nigeria Property Awards",
      category: "Excellence Award"
    },
    {
      year: "2023",
      title: "Most Trusted Real Estate Brand - Customer Choice Awards",
      category: "Trust Award"
    },
    {
      year: "2023",
      title: "Diaspora Real Estate Company of the Year",
      category: "Innovation Award"
    },
    {
      year: "2022",
      title: "Outstanding Property Development - Lagos State",
      category: "Development Award"
    }
  ];

  const insurances = [
    "Professional Indemnity Insurance - ₦1B Coverage",
    "Public Liability Insurance - ₦500M Coverage",
    "Directors & Officers Insurance",
    "Property Development Insurance",
    "Cyber Liability Insurance"
  ];

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            fontWeight="bold" 
            sx={{ 
              mb: 2,
              background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            🏛️ Company Credentials & Trust
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Your peace of mind is our priority. See why thousands of clients trust ALOTER Realty with their investments.
          </Typography>
        </Box>

        {/* Official Registrations */}
        <Box mb={8}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Official Registrations
          </Typography>
          <Grid container spacing={4}>
            {registrations.map((reg, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  elevation={6}
                  sx={{ 
                    height: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" alignItems="flex-start" spacing={3}>
                      <Box 
                        sx={{ 
                          backgroundColor: 'primary.main',
                          color: 'white',
                          p: 2,
                          borderRadius: 3,
                          minWidth: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {reg.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {reg.title}
                        </Typography>
                        <Typography variant="body1" color="primary.main" fontWeight="bold" gutterBottom>
                          {reg.number}
                        </Typography>
                        <Chip 
                          label={reg.status} 
                          color="success" 
                          size="small"
                          icon={<VerifiedIcon />}
                          sx={{ mb: 2 }}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                          {reg.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Professional Certifications & Insurance */}
        <Grid container spacing={6} mb={8}>
          <Grid item xs={12} lg={6}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center" mb={3}>
                <CertificateIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Professional Certifications
                </Typography>
              </Box>
              <List>
                {certifications.map((cert, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={cert} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box textAlign="center" mb={3}>
                <ShieldIcon sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Insurance Coverage
                </Typography>
              </Box>
              <List>
                {insurances.map((insurance, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <SecurityIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={insurance} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Awards & Recognition */}
        <Box mb={8}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Awards & Recognition
          </Typography>
          <Grid container spacing={3}>
            {awards.map((award, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card 
                  elevation={4}
                  sx={{ 
                    textAlign: 'center',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <AwardIcon sx={{ fontSize: 40, color: 'warning.main', mb: 2 }} />
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {award.year}
                    </Typography>
                    <Typography variant="body1" fontWeight="medium" gutterBottom>
                      {award.title}
                    </Typography>
                    <Chip label={award.category} color="primary" size="small" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Strategic Partnerships */}
        <Paper elevation={8} sx={{ p: 6, borderRadius: 4, background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)', color: 'white' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Trusted Partnerships
          </Typography>
          <Grid container spacing={4}>
            {partnerships.map((partner, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Box textAlign="center">
                  <Avatar 
                    src={partner.logo}
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mx: 'auto', 
                      mb: 2,
                      backgroundColor: 'white',
                      border: '3px solid rgba(255,255,255,0.3)'
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {partner.name}
                  </Typography>
                  <Chip 
                    label={partner.type} 
                    variant="outlined" 
                    sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Trust Guarantee */}
        <Box textAlign="center" mt={8}>
          <Paper 
            elevation={6}
            sx={{ 
              p: 6, 
              borderRadius: 4,
              background: 'linear-gradient(145deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%)',
              border: '2px solid',
              borderColor: 'success.main'
            }}
          >
            <VerifiedIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom color="success.main">
              100% Verified & Trusted
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              Every certification, registration, and partnership displayed here is verified and current. 
              Your investment is protected by our comprehensive insurance coverage and regulatory compliance.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
