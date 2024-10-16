import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full p-8 mt-28">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d0d0d",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { particles_nb: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#00ffff" },
            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { random: true, value: 5 },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="neon-text text-5xl mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Warthog (WARTY) <br />🐗🚀
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the speed and fun of the crypto savanna! WARTY is here to bring laughter and profits, combining the charm of the wild with cutting-edge tech.
        </motion.p>
        <a href="https://external-site.com" target="_blank" rel="noopener noreferrer"> {/* Update this URL */}
          <motion.button
            className="neon-button px-6 py-3 text-lg font-bold rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Join the Warty Revolution
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
