'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Paper,
  IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function TeamProfiles() {
  const teamMembers = [
    {
      id: 1,
      name: "Gabriel Aloho",
      position: "Managing Director & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      education: "MBA Real Estate, University of Lagos",
      experience: "15+ years",
      specialties: ["Strategic Planning", "Business Development", "Investment Advisory"],
      achievements: [
        "Led over ₦50B in property transactions",
        "Certified Real Estate Professional (CREP)",
        "Featured in Top 40 Under 40 Real Estate Leaders"
      ],
      email: "gabriel@aloterrealty.com",
      phone: "+234 803 123 4567",
      linkedin: "gabriel-aloho"
    },
    {
      id: 2,
      name: "Adebayo Johnson",
      position: "Head of Sales & Marketing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      education: "B.Sc Marketing, Obafemi Awolowo University",
      experience: "12+ years",
      specialties: ["Sales Strategy", "Client Relations", "Market Analysis"],
      achievements: [
        "Achieved 150% sales target for 3 consecutive years",
        "Certified Sales Professional (CSP)",
        "Built network of 5000+ satisfied clients"
      ],
      email: "adebayo@aloterrealty.com",
      phone: "+234 806 234 5678",
      linkedin: "adebayo-johnson"
    },
    {
      id: 3,
      name: "Fatima Abdullahi",
      position: "Head of Legal & Documentation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=300&h=300&fit=crop&crop=face",
      education: "LL.B, Ahmadu Bello University; BL, Nigerian Law School",
      experience: "10+ years",
      specialties: ["Property Law", "Due Diligence", "Contract Negotiation"],
      achievements: [
        "Successfully handled 2000+ property transactions",
        "Member, Nigerian Bar Association",
        "Zero legal disputes in client transactions"
      ],
      email: "fatima@aloterrealty.com",
      phone: "+234 809 345 6789",
      linkedin: "fatima-abdullahi"
    },
    {
      id: 4,
      name: "Chidubem Okafor",
      position: "Head of Development & Construction",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      education: "B.Eng Civil Engineering, University of Nigeria Nsukka",
      experience: "14+ years",
      specialties: ["Project Management", "Construction Oversight", "Quality Control"],
      achievements: [
        "Delivered 50+ residential and commercial projects",
        "Certified Project Management Professional (PMP)",
        "100% on-time project delivery record"
      ],
      email: "chidubem@aloterrealty.com",
      phone: "+234 802 456 7890",
      linkedin: "chidubem-okafor"
    },
    {
      id: 5,
      name: "Kemi Adeyemi",
      position: "Diaspora Investment Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      education: "M.Sc International Business, London School of Economics",
      experience: "8+ years",
      specialties: ["International Relations", "Investment Advisory", "Cross-border Transactions"],
      achievements: [
        "Facilitated $100M+ in diaspora investments",
        "Fluent in English, French, and Yoruba",
        "Established partnerships in 15+ countries"
      ],
      email: "kemi@aloterrealty.com",
      phone: "+234 807 567 8901",
      linkedin: "kemi-adeyemi"
    },
    {
      id: 6,
      name: "Mohammed Yusuf",
      position: "Financial Advisory & Investment",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      education: "M.Sc Finance, University of Edinburgh",
      experience: "11+ years",
      specialties: ["Investment Analysis", "Financial Planning", "Risk Management"],
      achievements: [
        "CFA Charterholder",
        "Managed ₦30B+ investment portfolio",
        "Published author on Nigerian real estate investment"
      ],
      email: "mohammed@aloterrealty.com",
      phone: "+234 805 678 9012",
      linkedin: "mohammed-yusuf"
    }
  ];

  const getRandomColor = (index) => {
    const colors = ['primary', 'secondary', 'success', 'info', 'warning'];
    return colors[index % colors.length];
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80") center/cover',
          opacity: 0.03,
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
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
            👥 Meet Our Expert Team
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
            Our experienced professionals are dedicated to making your real estate journey successful and stress-free
          </Typography>
        </Box>

        {/* Team Grid */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={6} lg={4} key={member.id}>
              <Card 
                elevation={8}
                sx={{ 
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, 
                      ${index % 3 === 0 ? '#0064d7' : index % 3 === 1 ? '#4ecdc4' : '#45b7d1'} 0%, 
                      ${index % 3 === 0 ? '#004ba8' : index % 3 === 1 ? '#44a08d' : '#2196f3'} 100%
                    )`,
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Profile Section */}
                  <Box textAlign="center" mb={3}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: '4px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 8px 24px rgba(0,100,215,0.3)',
                      }}
                    />
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="primary.main" 
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      {member.position}
                    </Typography>
                    
                    {/* Contact Info */}
                    <Stack direction="row" justifyContent="center" spacing={1}>
                      <IconButton 
                        size="small" 
                        color="primary"
                        href={`mailto:${member.email}`}
                      >
                        <EmailIcon />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        color="primary"
                        href={`tel:${member.phone}`}
                      >
                        <PhoneIcon />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        color="primary"
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Stack>
                  </Box>

                  {/* Education & Experience */}
                  <Box mb={3}>
                    <Stack direction="row" alignItems="center" mb={1}>
                      <SchoolIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                      <Typography variant="body2" fontWeight="medium">
                        Education
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                      {member.education}
                    </Typography>

                    <Stack direction="row" alignItems="center" mb={1}>
                      <BusinessIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                      <Typography variant="body2" fontWeight="medium">
                        Experience: {member.experience}
                      </Typography>
                    </Stack>
                  </Box>

                  {/* Specialties */}
                  <Box mb={3}>
                    <Typography variant="body2" fontWeight="medium" gutterBottom>
                      Specialties
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {member.specialties.map((specialty, idx) => (
                        <Chip
                          key={idx}
                          label={specialty}
                          size="small"
                          variant="outlined"
                          color={getRandomColor(idx)}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Key Achievements */}
                  <Box>
                    <Stack direction="row" alignItems="center" mb={1}>
                      <EmojiEventsIcon sx={{ mr: 1, color: 'warning.main', fontSize: 20 }} />
                      <Typography variant="body2" fontWeight="medium">
                        Key Achievements
                      </Typography>
                    </Stack>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {member.achievements.map((achievement, idx) => (
                        <Typography 
                          key={idx}
                          component="li" 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ mb: 0.5, fontSize: '0.85rem', lineHeight: 1.4 }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Company Stats */}
        <Paper 
          elevation={6}
          sx={{ 
            mt: 8, 
            p: 6, 
            borderRadius: 4,
            background: 'linear-gradient(135deg, #0064d7 0%, #004ba8 100%)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why Choose Our Team?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={3}>
              <Typography variant="h2" fontWeight="bold">60+</Typography>
              <Typography variant="body1">Combined Years of Experience</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h2" fontWeight="bold">5000+</Typography>
              <Typography variant="body1">Satisfied Clients</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h2" fontWeight="bold">₦100B+</Typography>
              <Typography variant="body1">Total Transactions</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h2" fontWeight="bold">15+</Typography>
              <Typography variant="body1">Countries Served</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
