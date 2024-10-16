import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';
import Tokenomics from '../components/Tokenomics';
import Caution from '../components/Caution';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Caution /> 
      <Roadmap />
      <Tokenomics />
    </div>
  );
};

export default Home;
