import React from 'react';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center p-4 bg-darkPanel mt-8">
      <div className="text-center">
        <p className="neon-text">Join the WARTY Community</p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaTwitter className="text-neonBlue hover:text-neonGreen text-2xl cursor-pointer" />
          <FaTelegram className="text-neonBlue hover:text-neonGreen text-2xl cursor-pointer" />
          <FaDiscord className="text-neonBlue hover:text-neonGreen text-2xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
