'use client';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

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
    <div className="bg-blue-50 p-8 rounded-lg">
      <h3>Our Network</h3>
      <div className="text-4xl font-bold">{affiliateCount}+</div>
      <p>Trusted Partners</p>
    </div>
  );
}