// src/components/Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 lg:py-6 text-center text-gray-600 text-xs sm:text-sm sm:pb-8 px-2">
      <p className="flex flex-wrap justify-center items-center">
        <span>&copy; {currentYear}</span>
        <span className="mx-1 font-bold">Calendar2024</span>
        <span className="mx-1">|</span>
        <span>Développé avec</span>
        <span className="text-orange-500 mx-1">♥</span>
        <span>par</span>
        <a href="https://princekouame.com/" className="text-[#fa8e45] font-bold ml-1 hover:underline">
          prince Kouamé
        </a>
      </p>
    </footer>
  );
}

export default Footer;