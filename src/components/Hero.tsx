// src/components/Hero.tsx
'use client'; // Add this line because we're using Framer Motion

import { ArrowRight, Download, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import profilepic from '../../public/profile.png'

const Hero = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation of children
        delayChildren: 0.3,
      },
    },
  };

 const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const, // 👈 literal type for Framer Motion 11+
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <>
    <Navigation/>
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Optional: Subtle background pattern or texture could go here */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.03] dark:opacity-[0.02]"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-3"
          >
            Hi there, I&apos;m
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Aryan Raj
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-medium"
          >
            A passionate{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Crafting innovative and user-centric digital experiences with clean code and modern design principles.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 text-center lg:text-left">
            <a
              href="/resume.pdf" // Ensure resume is in public folder
              download
              className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
            >
              <Download className="mr-1.5 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </a>
          </motion.div>
        </div>

         {/* Image */}
         <motion.div
           variants={imageVariants}
           className="flex justify-center items-center mt-10 lg:mt-0"
         >
           <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
             {/* Optional decorative background element */}
             <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full blur-2xl opacity-50 dark:opacity-30"></div>
             {/* Image container */}
             <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
               <Image
                 src={profilepic }
                 alt="Aryan Raj - Full Stack Developer"
                 layout="fill" 
                 objectFit="cover"
                 priority 
               />
             </div>
           </div>
         </motion.div>

      </motion.div>

       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
         <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
           <motion.div
             className="w-1 h-2 bg-gray-500 dark:bg-gray-400 rounded-full"
             animate={{ y: [0, 12, 0] }}
             transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
           />
         </div>
       </div>
       
    </section>
    </>
  );
};

export default Hero;