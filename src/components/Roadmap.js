import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  { phase: 'Phase 1', title: 'Launch', details: 'Initial launch, community building, and first listings.' },
  { phase: 'Phase 2', title: 'Expansion', details: 'Increased marketing efforts, additional listings, and partnerships.' },
  { phase: 'Phase 3', title: 'Moonshot', details: 'Launch additional features, introduce staking, NFTs, Games, and more. This is the beginning of the new dawn!' }
];

const Roadmap = () => {
  return (
    <section className="my-16 px-4">
      <h2 className="text-center navbar neon-text text-4xl mb-8 z-20">WARTY Roadmap</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-darkPanel rounded-lg shadow-lg max-w-md w-full md:w-[45%] lg:w-[30%]"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <h3 className="neon-text text-2xl mb-2">{item.phase}: {item.title}</h3>
            <p>{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
