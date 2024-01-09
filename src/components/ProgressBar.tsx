'use client';

import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading delay
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 600);
  }, []);

  return (
    <section className='sticky w-full h-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-40% to-emerald-500 to-90%'></section>
  );
};

export default ProgressBar;
