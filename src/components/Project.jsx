
import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col justify-center px-5 md:px-1 lg:px-1">

      {/* Header */}
      <div className="w-full max-w-5xl font-mono flex flex-row justify-between items-center gap-4 sm:gap-0 mt-20 mb-20 px-4">
        {/* LEFT */}
        <div className="flex  w-full sm:w-auto gap-2 items-end">
          <span className="text-accent text-3xl">#</span>
          <span className="text-white text-3xl">projects</span>
          <div className="bg-accent h-0.5 w-20"></div>
        </div>
        {/* RIGHT */}
        <div className="text-white flex items-end text-base w-full sm:w-auto text-center sm:text-right">
          <span>View all</span>
          <div className="bg-accent h-0.5 w-20"></div>
        </div>
      </div>

      {/* All project cards */}
      <div className="flex justify-center">
        <div className="flex gap-4 w-full max-w-5xl flex-col md:flex-row lg:flex-row">

          {/* Card 1 */}
          <motion.div
            className="w-full border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-50.5">
              <img className="transition-all duration-300 ease-in-out hover:scale-110" src="/kri.png" alt="" />
            </div>
            <div className="text-gray-400 border border-gray-400 p-2 h-fit">
              <span>Tailwind</span> <span>react</span> <span>express</span> <span>mongodb</span>
            </div>
            <div className="p-4 gap-x-4">
              <p className="text-2xl font-medium font-mono text-white">ChertNodes</p>
              <p className="text-base font-normal font-mono text-gray-300 pb-4 pt-4">Minecraft servers hosting</p>
              <div className="flex gap-4">
                <div className="border border-accent px-4 py-2 hover:bg-accent w-full text-white text-center">Live</div>
                <div className="border border-accent px-4 py-2 hover:bg-accent w-full text-white text-center">Github</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="w-full border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-50.5">
              <img className="transition-all duration-300 ease-in-out hover:scale-110" src="/kri.png" alt="" />
            </div>
            <div className="text-gray-400 border border-gray-400 p-2 h-fit">
              <span>Tailwind</span> <span>react</span> <span>express</span> <span>mongodb</span>
            </div>
            <div className="p-4 gap-x-4">
              <p className="text-2xl font-medium font-mono text-white">ChertNodes</p>
              <p className="text-base font-normal font-mono text-gray-300 pb-4 pt-4">Minecraft servers hosting</p>
              <div className="flex gap-4">
                <div className="border border-accent px-4 py-2 hover:bg-accent w-full text-white text-center">Live</div>
                <div className="border border-accent px-4 py-2 hover:bg-accent w-full text-white text-center">Github</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="w-full border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-50.5">
              <img className="transition-all duration-300 ease-in-out hover:scale-110" src="/kri.png" alt="" />
            </div>
            <div className="text-gray-400 border border-gray-400 p-2 h-fit">
              <span>Tailwind</span> <span>react</span> <span>express</span> <span>mongodb</span>
            </div>
            <div className="p-4 gap-x-4">
              <p className="text-2xl font-medium font-mono text-white">ChertNodes</p>
              <p className="text-base font-normal font-mono text-gray-300 pb-4 pt-4">Minecraft servers hosting</p>
              <div className="flex gap-4">
                <div className="border border-accent px-4 py-2 hover:bg-accent w-full text-white text-center">Live</div>
                <div className="border border-accent px-4 py-2 hover:bg-accent w-full text-white text-center">Github</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}

export default Project;
