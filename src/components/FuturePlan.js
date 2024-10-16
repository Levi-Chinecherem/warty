import React from 'react';
import { motion } from 'framer-motion';
import Roadmap from './Roadmap';

const FuturePlan = () => {
  return (
    <section className="my-16 px-4"> {/* Adjusted padding for smaller screens */}
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-4"> {/* Flex container for responsive layout */}
        <Roadmap />
      </div>
      <h2 className="text-center neon-text text-4xl mb-8">Future Plans</h2>

      <div className="mt-8 flex justify-center"> {/* Centering the last item */}
        <motion.div
          key={2}
          className="timeline-item p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-lg" // Centered container
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            In <strong className="text-yellow-300">Phase 2</strong>, we will set up our Twitter, Discord, and Telegram accounts. Once we break the bounding curve on Pump.fun and get listed on Dexscreener, we expect this to happen within a week.
          </p>
          <p className="text-lg text-white mb-4">
            Moving into <strong className="text-yellow-300">Phase 3</strong>, we plan to introduce more fun and community-engaging activities, including NFTs, games, collaborations, and giveaways. We will also include a news page, which will be crucial for sharing major information.
          </p>
          <p className="text-lg text-white">
            Please be cautious and only follow links from this site for official announcements until we establish our social media presence after the Dex listing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlan;
