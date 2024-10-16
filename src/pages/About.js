import React from 'react';
import Features from '../components/Features';
import Caution from '../components/Caution';
import FuturePlan from '../components/FuturePlan'; // Import the new FuturePlan component

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 py-16 mt-20">
      <h2 className="neon-text text-3xl mb-6">About Warthog (WARTY)</h2>
      <p className="mt-4 text-lg max-w-xl text-center">
        Warthog (WARTY) is a memecoin inspired by the resilience and agility of the warthog. Our mission is to bring fun and excitement to the crypto world while building a strong community centered around creativity, engagement, and growth.
      </p>

      {/* Story Section */}
      <section className="mt-12 text-center">
        <h3 className="neon-text text-2xl mb-4">The WARTY Story</h3>
        <p className="max-w-2xl mx-auto text-lg">
          Our journey began with the vision of creating a cryptocurrency that embodies community spirit and entertainment. With WARTY, we strive to offer more than just a token; we aim to foster a movement that encourages participation, creativity, and connection. From NFTs to community events, we are committed to making WARTY a hub of fun and innovation in the crypto space.
        </p>
      </section>

      {/* Features Section */}
      <Features />

      {/* Caution Section */}
      <Caution /> 

      {/* Future Plans Section */}
      <FuturePlan /> {/* Insert the new FuturePlan component here */}
    </div>
  );
};

export default About;
