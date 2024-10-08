'use client'



import { motion } from 'framer-motion';

import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import senior from '../Images/senior.jpg'
import Image from 'next/image';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
   <div>
     <motion.header 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      className="bg-[#15172b] text-white py-4 px-6 shadow-lg fixed w-full z-50"
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-3xl font-bold text-yellow-400"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 120 }}
        >
          TechNest
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-lg">
          {['Home',  'Projects', 'Contact Us','About'].map((link, index) => (
            <motion.a 
              key={index}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.1, color: '#fbbf24' }} // Hover animation
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <XIcon className="w-8 h-8 text-white" />
            ) : (
              <MenuIcon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          className="lg:hidden bg-[#15172b] mt-4 py-4 px-6 space-y-4"
        >
          {['Home',  'Projects', 'Contact Us','About'].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="block text-lg hover:text-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.1, color: '#fbbf24' }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>

<section className="relative flex items-center justify-center h-[600px] bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/564x/a7/2b/0c/a72b0c9618e42683cab4b6c1b415992d.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
      
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
       
            👋
   
          Hi, we are <span className="text-teal-400">TechNest</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          We are creative developers focused on building engaging web experiences and delivering solutions that make a difference.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 text-lg font-semibold text-gray-900 bg-teal-400 rounded-full shadow-lg hover:bg-teal-300 transition duration-300"
          >
            View our Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-lg font-semibold text-teal-400 border border-teal-400 rounded-full hover:bg-teal-400 hover:text-gray-900 transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
    <section id="about" className="bg-[#15172b] py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        {/* Left Side - Profile Image & About Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <section id="about" className="bg-[#15172b] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        {/* Left Side - Profile Image & About Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={""} // Replace with your image
            alt="Profile"
            width={300}
            height={300}
            className="rounded-lg"
          />
          
        </motion.div>

      
      </div>
    </section>
          <h2 className="text-4xl font-bold  text-yellow-400 text-left">Know About Us</h2>
          <p className=" text-lg text-gray-400 text-left max-w-lg">
            we are passionate software developers with extensive experience in full-stack web and mobile app development. we have expertise in creating seamless user experiences through robust front-end technologies and efficient back-end systems. With a strong focus on delivering quality and scalable solutions, we aim to provide clients with applications that meet their needs and exceed expectations.
          </p>
        </motion.div>

        {/* Right Side - Skills */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/** Skills List **/}
          {[
           {
            title: "Software Development",
            description: "Expert in modern frameworks like React, Next.js, and NestJS.We develop scalable and efficient code that enhances application performance."
          },

          {
            title: "Mobile App Development",
            description: "Proficient in building mobile applications using Flutter and React Native with a focus on performance and smooth user interactions."
          },

          {
            title: "Information Systems",
            description: "Specialized in designing and managing large-scale information systems to support organizational operations and data-driven decision-making."
          },

          {
            title: "Artificial Intelligence & Machine Learning",
            description: "Proficient in developing and deploying AI-driven solutions using neural networks, natural language processing, and computer vision. Experienced with machine learning frameworks like TensorFlow and Scikit-learn to build real-world applications that solve complex problems and enhance automation."
          },
         


          {
            title: "Data Analysis & Power BI Visualization",
            description: "Experienced in building interactive dashboards and data visualizations using Microsoft Power BI. Skilled at transforming complex data into clear, actionable insights for stakeholders and improving decision-making processes."
          }
          ,

            
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1d1f33] p-6 rounded-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }} // Delay for staggered effect
            >
              <h3 className="text-xl font-bold text-yellow-400 text-left">{skill.title}</h3>
              <p className="text-gray-400 mt-2 text-left">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
   </div>
  
  );
}
