'use client';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/16/solid';

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
    // ...other plans
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map(plan => (
        <div key={plan.name} className="border rounded-lg p-6">
          <h3 className="font-bold text-xl">{plan.name}</h3>
          <p className="text-2xl my-4">{plan.price}</p>
          <ul className="space-y-2">
            {plan.features.map(feat => (
              <li key={feat} className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                {feat}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}