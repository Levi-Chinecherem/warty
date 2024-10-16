// src/components/Caution.js

import React from 'react';

const Caution = () => {
  return (
    <section className="mt-12 navbar text-center bg-red-500 text-white p-6 rounded-lg shadow-lg z-10 max-w-3xl mx-auto"> {/* Added max-w-3xl and mx-auto */}
      <h3 className="neon-text text-2xl mb-4">Caution</h3>
      <p className="text-lg">
        We are on a mission to the moon! Warthog (WARTY) is not just another memecoin; we aim to be the fastest-growing coin in the crypto space, focusing on changing lives and making history. If you're here to pump and dump, we kindly ask you to stay away. We value our community and are dedicated to building a lasting and impactful ecosystem. Join us for the ride, but know that our focus is on sustainable growth and community engagement.
      </p>
    </section>
  );
};

export default Caution;
