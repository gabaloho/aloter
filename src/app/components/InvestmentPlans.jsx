'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';

export default function InvestmentPlans() {
  const plans = [
    {
      name: "Starter Plan",
      price: "₦50,000",
      features: ["0.5% monthly ROI", "6-month duration", "Property co-ownership"]
    },
    {
      name: "Medium Plan",
      price: "₦70,000",
      features: ["0.5% monthly ROI", "6-month duration", "Property co-ownership"]
    },
    {
      name: "Investor Plan",
      price: "₦100,000",
      features: ["0.5% monthly ROI", "6-month duration", "Property co-ownership"]
    },
    {
      name: "Mega Plan",
      price: "₦150,000",
      features: ["0.5% monthly ROI", "6-month duration", "Property co-ownership"]
    },
  ];

  return (
    <Grid container spacing={4} sx={{ py: 6 }}>
      {plans.map(plan => (
        <Grid item xs={12} md={3} key={plan.name}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {plan.name}
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                {plan.price}
              </Typography>
              <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                {plan.features.map(feat => (
                  <li key={feat} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                    <Typography variant="body2">{feat}</Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}