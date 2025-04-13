import React from 'react';
import OverviewCards from './components/OverviewCards';

function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-pink-600">Dashboard</h1>
      <OverviewCards />
    </div>
  );
}

export default App;
