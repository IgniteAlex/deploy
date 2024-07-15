import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/ss2.png";

const AnimatedLogo = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, 100, 0],
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <motion.img
      className="mx-2 w-12"
      src={logo}
      alt="logo"
      animate={controls}
      style={{ position: 'relative' }}
    />
  );
};

const AnimatedIcon = ({ children, delay }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }} // Animation keyframes
      transition={{
        duration: 1.5, // Duration of one complete cycle (up and down)
        repeat: Infinity, // Repeat the animation infinitely
        ease: "easeInOut", // Easing function for smooth animation
        delay: delay // Delay the start of the animation
      }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/solanki-harsh-427799261/', '_blank');
  };

  const handleGithubInClick = () => {
    window.open('https://github.com/IgniteAlex', '_blank');
  };

  const handleTwitterInClick = () => {
    window.open('https://x.com/Harshso81331155', '_blank');
  };

  const handleInstaGramInClick = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <AnimatedLogo />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <AnimatedIcon delay={0}><FaLinkedin className="cursor-pointer" onClick={handleLinkedInClick}/></AnimatedIcon>
        <AnimatedIcon delay={0.5}><FaGithub className="cursor-pointer" onClick={handleGithubInClick}/></AnimatedIcon>
        <AnimatedIcon delay={1}><FaSquareXTwitter className="cursor-pointer" onClick={handleTwitterInClick}/></AnimatedIcon>
        <AnimatedIcon delay={1.5}><FaInstagram className="cursor-pointer" onClick={handleInstaGramInClick}/></AnimatedIcon>
      </div>
    </nav>
  );
};

export default Navbar;
