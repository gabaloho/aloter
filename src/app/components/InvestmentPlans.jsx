'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export default function InvestmentPlans() {
  const plans = [
    {
      name: "Starter Plan",
      price: "₦50,000",
      description: "Perfect for first-time investors",
      features: ["0.5% monthly ROI", "6-month duration", "Property co-ownership", "Basic support"],
      popular: false,
      color: '#42a5f5'
    },
    {
      name: "Growth Plan", 
      price: "₦100,000",
      description: "Ideal for growing your portfolio",
      features: ["0.7% monthly ROI", "12-month duration", "Property co-ownership", "Priority support", "Market insights"],
      popular: true,
      color: '#0064d7'
    },
    {
      name: "Premium Plan",
      price: "₦250,000", 
      description: "Maximum returns for serious investors",
      features: ["1% monthly ROI", "18-month duration", "Full property ownership options", "Dedicated advisor", "Exclusive deals", "Legal support"],
      popular: false,
      color: '#1976d2'
    },
    {
      name: "Mega Plan",
      price: "₦500,000+",
      description: "Enterprise-level investment opportunities", 
      features: ["1.5% monthly ROI", "24-month duration", "Commercial property access", "Personal account manager", "Custom investment strategies", "VIP treatment"],
      popular: false,
      color: '#0d47a1'
    },
  ];

  return (
    <Grid container spacing={4}>
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} lg={3} key={plan.name}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderRadius: 3,
              transition: 'all 0.3s ease-in-out',
              border: plan.popular ? '2px solid' : '1px solid',
              borderColor: plan.popular ? 'primary.main' : 'divider',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: plan.popular 
                  ? '0 20px 40px rgba(0,100,215,0.2)' 
                  : '0 12px 24px rgba(0,0,0,0.15)',
              }
            }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <Chip
                label="Most Popular"
                color="primary"
                size="small"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 1,
                  fontWeight: 'bold',
                  fontSize: '0.75rem'
                }}
              />
            )}

            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              {/* Plan Header */}
              <Box textAlign="center" mb={3}>
                <Box 
                  sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%',
                    backgroundColor: plan.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'white'
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {plan.name.charAt(0)}
                  </Typography>
                </Box>
                
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {plan.name}
                </Typography>
                
                <Typography 
                  variant="h4" 
                  color="primary" 
                  fontWeight="bold"
                  gutterBottom
                >
                  {plan.price}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
              </Box>

              {/* Features List */}
              <Box>
                {plan.features.map((feature, idx) => (
                  <Box 
                    key={idx} 
                    display="flex" 
                    alignItems="flex-start" 
                    mb={1.5}
                  >
                    <CheckCircleIcon 
                      color="success" 
                      sx={{ fontSize: 20, mr: 1, mt: 0.1, flexShrink: 0 }} 
                    />
                    <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>

            <CardActions sx={{ p: 3, pt: 0 }}>
              <Button 
                variant={plan.popular ? "contained" : "outlined"}
                color="primary" 
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  fontSize: '1rem',
                  ...(plan.popular && {
                    background: `linear-gradient(45deg, ${plan.color} 30%, #42a5f5 90%)`,
                    '&:hover': {
                      background: `linear-gradient(45deg, #1976d2 30%, ${plan.color} 90%)`,
                    }
                  })
                }}
              >
                {plan.popular ? 'Get Started Now' : 'Choose Plan'}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}