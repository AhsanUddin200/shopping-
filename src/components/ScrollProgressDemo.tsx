"use client"; // Ensures this component is rendered on the client-side

import { motion, useScroll } from 'framer-motion';

const ScrollProgressDemo = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <style jsx>{`
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          transform-origin: 0%;
          z-index: 1000;
        }
      `}</style>
    </>
  );
};

export default ScrollProgressDemo;
