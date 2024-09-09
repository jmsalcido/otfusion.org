'use client';

import { useState } from 'react';

export default function NotFound() {
  const [_clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    setClicked(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-notFound text-center px-4">
      <h1 className="text-6xl sm:text-9xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl sm:text-4xl font-semibold text-gray-700 mb-8">Sorry, Not Found</h2>

      <div className="mb-8">
        <img
          src="/404.png"
          alt="404 Image"
          className="object-cover w-48 h-full sm:w-96 sm:h-full"
        />
      </div>

      <a
        href="/"
        className="px-6 sm:px-8 py-3 sm:py-4 text-white text-lg sm:text-xl hover:bg-[#B57D5D] bg-black relative overflow-hidden rounded-lg"
        onClick={handleClick}
      >
        Go Back Home
      </a>
    </div>
  );
}