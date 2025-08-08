'use client';
import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(50000000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(15);
  const [results, setResults] = useState(null);

  const calculateMortgage = () => {
    const loanAmount = propertyPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
    
    setResults({
      loanAmount,
      monthlyPayment,
      totalPayment,
      totalInterest,
      downPaymentAmount: propertyPrice * (downPayment / 100)
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        textAlign="center" 
        gutterBottom
        sx={{ mb: 4 }}
      >
        🏠 Mortgage Calculator
      </Typography>
      <Typography 
        variant="h6" 
        textAlign="center" 
        color="text.secondary" 
        sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
      >
        Plan your property investment with our comprehensive mortgage calculator
      </Typography>

      <Grid container spacing={4} maxWidth="lg" sx={{ mx: 'auto' }}>
        {/* Input Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Loan Details
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" fontWeight="medium" gutterBottom>
                Property Price
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>₦</Typography>,
                }}
                sx={{ mb: 2 }}
              />
              <Slider
                value={propertyPrice}
                onChange={(e, newValue) => setPropertyPrice(newValue)}
                min={10000000}
                max={500000000}
                step={5000000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₦${(value / 1000000).toFixed(0)}M`}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" fontWeight="medium" gutterBottom>
                Down Payment: {downPayment}%
              </Typography>
              <Slider
                value={downPayment}
                onChange={(e, newValue) => setDownPayment(newValue)}
                min={10}
                max={50}
                step={5}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}%`}
                sx={{ mb: 2 }}
              />
            </Box>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Typography variant="body1" fontWeight="medium" gutterBottom>
                  Loan Term (Years)
                </Typography>
                <Slider
                  value={loanTerm}
                  onChange={(e, newValue) => setLoanTerm(newValue)}
                  min={5}
                  max={30}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value} years`}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontWeight="medium" gutterBottom>
                  Interest Rate (%)
                </Typography>
                <Slider
                  value={interestRate}
                  onChange={(e, newValue) => setInterestRate(newValue)}
                  min={8}
                  max={25}
                  step={0.5}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value}%`}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={calculateMortgage}
              startIcon={<CalculateIcon />}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              Calculate Mortgage
            </Button>
          </Paper>
        </Grid>

        {/* Results Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 3, height: 'fit-content' }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Calculation Results
            </Typography>

            {results ? (
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Card sx={{ mb: 2, backgroundColor: 'primary.main', color: 'white' }}>
                      <CardContent sx={{ textAlign: 'center', py: 3 }}>
                        <AccountBalanceIcon sx={{ fontSize: 40, mb: 1 }} />
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Monthly Payment
                        </Typography>
                        <Typography variant="h4" fontWeight="bold">
                          {formatCurrency(results.monthlyPayment)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Down Payment
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" color="success.main">
                        {formatCurrency(results.downPaymentAmount)}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Loan Amount
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {formatCurrency(results.loanAmount)}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Total Interest
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" color="error.main">
                        {formatCurrency(results.totalInterest)}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Total Payment
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {formatCurrency(results.totalPayment)}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ backgroundColor: 'info.main', color: 'white', p: 3, borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                    💡 Quick Tip:
                  </Typography>
                  <Typography variant="body2">
                    A higher down payment reduces your monthly payment and total interest paid over the life of the loan.
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center', py: 8, color: 'text.secondary' }}>
                <TrendingUpIcon sx={{ fontSize: 60, mb: 2, opacity: 0.5 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Ready to Calculate?
                </Typography>
                <Typography variant="body1">
                  Adjust the loan parameters and click "Calculate Mortgage" to see your results.
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
