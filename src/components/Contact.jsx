

import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="w-full max-w-5xl flex flex-col justify-center px-5 md:px-1 lg:px-1">
        <div className="w-full font-mono flex flex-col justify-between sm:gap-0 mt-20 mb-20 px-4">

          {/* Header */}
          <div className="flex flex-row w-full sm:w-auto gap-2 items-end">
            <span className="text-accent text-3xl">#</span>
            <span className="text-white text-3xl">contact</span>
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
              <p>Feel free to reach out for freelance projects, collaborations, or any questions.
              I’m always open to discussing new ideas and opportunities.</p>
              <button className="h-9 w-38 flex items-center justify-center text-white border border-gray-300 hover:bg-[#C778DD] font-mono">
                Contact!
              </button>
            </motion.div>

            {/* Left Contact Info */}
            <motion.div
              className='w-full border border-gray-300 h-fit'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='text-white p-2 border border-gray-100'>Message me here</div>
              <div className='p-2 text-gray-400'>
                <div className='flex flex-row gap-2 items-center hover:text-white'>
                  <MdEmail /> <p>imranmiatech@gmail.com</p>
                </div>
                <a href="https://www.linkedin.com/in/md-imran-mia-7089ab286" target="_blank" rel="noopener noreferrer">
                <div className='flex flex-row gap-2 items-center hover:text-white'>
                  <FaLinkedin /> <p>LinkedIn</p>
                </div>
                </a>
                <a href="https://www.facebook.com/md.imran.428063" target="_blank" rel="noopener noreferrer"><div className='flex flex-row gap-2 items-center hover:text-white'>
                  <FaFacebookF /> <p>Facebook</p>
                </div></a>
                
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

export default Contact;
