import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/YourPage' },
  { name: 'Twitter', url: 'https://twitter.com/YourHandle' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@YourHandle' },
  { name: 'Telegram', url: 'https://t.me/YourChannel' },
  { name: 'YouTube', url: 'https://www.youtube.com/c/YourChannel' },
];

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 mt-20">
      <h2 className="neon-text text-4xl mb-4 text-center">Contact Us</h2>
      <p className="mt-2 text-lg text-center max-w-md">
        Have questions or want to join our community? Reach out to us and be part of the WARTY family. 
        Connect with us on social media to stay updated on our latest news, events, and community activities!
      </p>
      <p className="mt-2 text-lg text-center max-w-md">
        Note: All this links will be activated immediately we cross the bounding curve and list on DexScreener.
      </p>
      <div className="mt-6 flex flex-wrap justify-center space-x-4"> {/* Flex container for social links */}
        {socialLinks.map((link, index) => (
          <motion.a 
            key={index}
            href={link.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-xl font-bold transform hover:scale-110" // Stylish link
            initial={{ scale: 0.8 }} // Initial scale for animation
            animate={{ scale: 1 }} // Final scale for animation
            transition={{ duration: 0.3, delay: index * 0.1 }} // Animation with delay for staggered effect
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
