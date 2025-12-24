

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="w-full max-w-5xl flex flex-col justify-center px-5 md:px-1 lg:px-1">
        <div className="w-full font-mono flex flex-col justify-between sm:gap-0 mt-20 mb-20 px-4">

          {/* Header */}
          <div className="flex flex-row w-full sm:w-auto gap-2 items-end">
            <span className="text-accent text-3xl">#</span>
            <span className="text-white text-3xl">about</span>
            <div className="bg-accent h-0.5 w-20"></div>
          </div>

          {/* Content */}
          <div className='mt-4 flex flex-col md:flex-row lg:flex-row justify-between gap-8'>

            {/* Right Text */}
            <motion.div
              className='flex flex-col gap-4 mt-10 max-w-129 text-gray-400'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <p>Hello, I’m Imran!</p>
              <p>I’m a full-stack web developer passionate about building responsive web applications.
                I combine creativity and technology to craft user-friendly experiences.
             Focused on clean code and modern, scalable solutions</p>
              <p>Full-stack developer skilled in Node.js, Express, Next.js, React, PostgreSQL, MongoDB, and TypeScript.
                Building clean, scalable, and efficient web applications</p>
                <Link to='/about'>
                <button className="h-9 w-38 flex items-center justify-center text-white border border-gray-300 hover:bg-[#C778DD] font-mono">
                Read more!
                </button>
                </Link>
              
            </motion.div>

            {/* Left Image */}
            <motion.div
              className='w-88 h-70'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[url('/behind.png')] bg-cover h-full">
                <img src="/Image.png" alt="" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Decorations */}
      <div className='border border-gray-300 h-23 w-23 absolute -left-3 hidden md:flex lg:flex'></div>

      <div className='h-30 w-30 md:flex lg:flex flex-col gap-4 absolute -right-3 hidden'>
        {Array(4).fill(0).map((_, row) => (
          <div key={row} className='w-full flex flex-row justify-between'>
            {Array(4).fill(0).map((_, col) => (
              <div key={col} className='bg-white h-0.5 w-0.5'></div>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}

export default About;
