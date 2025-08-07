'use client';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function StatsCounter() {
  const [affiliateCount, setAffiliateCount] = useState(0);

  useEffect(() => {
    const affiliatesRef = collection(db, 'affiliates');
    const unsubscribe = onSnapshot(affiliatesRef, (snapshot) => {
      setAffiliateCount(snapshot.size);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box py={4} display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ p: 4, minWidth: 200, textAlign: 'center' }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Our Network
        </Typography>
        <Typography variant="h3" fontWeight="bold">
          {affiliateCount}+
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Trusted Partners
        </Typography>
      </Paper>
    </Box>
  );
}