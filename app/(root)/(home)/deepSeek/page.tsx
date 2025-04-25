// components/OpenNewTabButton.tsx
'use client';
import React from 'react';

const DeepSeek: React.FC = () => {
  const DeepSeek = () => {
    const url = 'https://chatbot-nine-inky-22.vercel.app/'; // Replace with your target URL
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button onClick={DeepSeek}>
      DeepSeek
    </button>
  );
};

export default DeepSeek;
