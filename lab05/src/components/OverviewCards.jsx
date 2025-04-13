import React from 'react';
import btmoney from '../assets/icons/btmoney.png';
import btshop from '../assets/icons/btshop.png';
import create from '../assets/icons/create.png';

const cards = [
  {
    title: 'Turnover',
    value: '$92,405',
    change: '+5.39%',
    icon: btmoney,
    color: 'bg-pink-50',
    textColor: 'text-pink-700'
  },
  {
    title: 'Profit',
    value: '$32,218',
    change: '+5.39%',
    icon: btshop,
    color: 'bg-blue-50',
    textColor: 'text-blue-700'
  },
  {
    title: 'New customer',
    value: '298',
    change: '+6.84%',
    icon: create,
    color: 'bg-blue-100',
    textColor: 'text-blue-800'
  }
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {cards.map((card, index) => (
        <div key={index} className={`p-6 rounded-lg ${card.color}`}>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 font-medium">{card.title}</p>
              <h2 className="text-2xl font-semibold">{card.value}</h2>
              <p className="text-xs text-green-600 mt-1">{card.change} period of change</p>
            </div>
            <img src={card.icon} alt={card.title} className="w-6 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
}
