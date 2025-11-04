import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 mt-4">
      <div className="max-w-6xl mx-auto px-8 flex justify-center items-center">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
