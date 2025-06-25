
// Minuti Online Ordering App (Web + iOS + Android) with User Login

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

const initialCart = [];
const storeLocations = [
  'Eldridge', 'Gaston', 'Kirby', 'Westheimer', 'Katy', 'Bellaire', 'River Oaks', 'Downtown', 'Midtown', 'Galleria', 'Woodlands', 'Heights', 'Sugar Land', 'Cypress'
];

function Home({ user }) {
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold text-red-600">Welcome to Minuti Coffee</h1>
      <p className="mt-4 text-lg">{user ? `Welcome back, ${user}!` : 'Sign in to earn rewards on your order.'}</p>
      <Link to="/menu">
        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700">Start Your Order</button>
      </Link>
    </div>
  );
}

// (Truncated for brevity in this code snippet)
export default App;
