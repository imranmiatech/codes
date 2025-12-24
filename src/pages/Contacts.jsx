import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl flex flex-col justify-center px-5 md:px-1 lg:px-1">
        <div className="w-full font-mono flex flex-col justify-between sm:gap-0 mt-20 mb-20 px-4">

          {/* HEADER */}
          <div className="flex flex-row w-full sm:w-auto gap-2 items-end">
            <span className="text-accent text-3xl">#</span>
            <span className="text-white text-3xl">contact</span>
            <div className="bg-accent h-0.5 w-20"></div>
          </div>

          {/* CONTENT */}
          <div className='mt-4 flex flex-col md:flex-row lg:flex-row justify-between gap-8'>

            {/* LEFT */}
            <div className='flex flex-col gap-4 mt-10 max-w-129 text-gray-400'>
              <p>
                Feel free to reach out for freelance projects, collaborations, or any questions. I’m always open to discussing new ideas and opportunities.
              </p>
              <a href="https://www.linkedin.com/in/md-imran-mia-7089ab286/" target="_blank" rel="noopener noreferrer">
               <button className="h-9 w-38 flex items-center justify-center cursor-pointer 
                                 text-white border border-gray-300 
                                 hover:bg-[#C778DD] font-mono">
                Contact me!!
              </button>
              </a>
            </div>

            {/* RIGHT */}
            <div className='w-full border border-gray-300 h-fit'>
              <div className='text-white p-2 border border-gray-100'>Message me here</div>
              <div className='p-2 text-gray-400'>
                 <div className='flex flex-row gap-2 items-center hover:text-white'>
                                  <MdEmail /> <p>imranmiatech@gmail.com</p>
                                </div>
                                <a href="https://www.linkedin.com/in/md-imran-mia-7089ab286">
                                <div className='flex flex-row gap-2 items-center hover:text-white'>
                                  <FaLinkedin /> <p>LinkedIn</p>
                                </div>
                                </a>
                                <a href="https://www.facebook.com/md.imran.428063"><div className='flex flex-row gap-2 items-center hover:text-white'>
                                  <FaFacebookF /> <p>Facebook</p>
                                </div></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contacts;


