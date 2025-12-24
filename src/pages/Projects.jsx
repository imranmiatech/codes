// import React from 'react'

// const Projects = () => {
//   return (
//     <div className="w-full">

//       {/* ===== CENTER CONTAINER (1024px) ===== */}
//       <div className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-y-10">

//         {/* HEADER */}
//         <div className='flex flex-col gap-y-2.5'>
//           <p>
//             <span className="text-accent text-2xl">/</span>{' '}
//             <span className="text-white text-2xl">projects</span>
//           </p>
//           <p className='text-base text-gray-400'>List of my projects</p>
//         </div>

//         {/* COMPLETE PROJECTS */}
//         <div>
//           <p>
//             <span className="text-accent text-2xl">#</span>{' '}
//             <span className="text-white text-2xl">complete-projects</span>
//           </p>

//           {/* PROJECT CARDS */}
//           <div className='flex flex-col md:flex-row gap-4 mt-6'>

//             {/* CARD 1 */}
//             <div className='w-full border border-gray-200 overflow-hidden'>
//               <div className='h-52 overflow-hidden'>
//                 <img
//                   className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
//                   src="/kri.png"
//                   alt=""
//                 />
//               </div>

//               <div className='text-gray-400 border-t border-gray-400 p-2'>
//                 Tailwind · React · Express · MongoDB
//               </div>

//               <div className='p-4'>
//                 <p className='text-2xl font-mono text-white'>ChertNodes</p>
//                 <p className='text-gray-300 py-4'>
//                   Minecraft servers hosting
//                 </p>

//                 <div className='flex gap-4'>
//                   <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Live
//                   </div>
//                   <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Github Link
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CARD 2 */}
//             <div className='w-full border border-gray-200 overflow-hidden'>
//               <div className='h-52 overflow-hidden'>
//                 <img
//                   className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
//                   src="/kri.png"
//                   alt=""
//                 />
//               </div>

//               <div className='text-gray-400 border-t border-gray-400 p-2'>
//                 Tailwind · React · Express · MongoDB
//               </div>

//               <div className='p-4'>
//                 <p className='text-2xl font-mono text-white'>ChertNodes</p>
//                 <p className='text-gray-300 py-4'>
//                   Minecraft servers hosting
//                 </p>

//                 <div className='flex gap-4'>
//                   <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Live
//                   </div>
//                   <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Github Link
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CARD 3 */}
//             <div className='w-full border border-gray-200 overflow-hidden'>
//               <div className='h-52 overflow-hidden'>
//                 <img
//                   className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
//                   src="/kri.png"
//                   alt=""
//                 />
//               </div>

//               <div className='text-gray-400 border-t border-gray-400 p-2'>
//                 Tailwind · React · Express · MongoDB
//               </div>

//               <div className='p-4'>
//                 <p className='text-2xl font-mono text-white'>ChertNodes</p>
//                 <p className='text-gray-300 py-4'>
//                   Minecraft servers hosting
//                 </p>

//                 <div className='flex gap-4'>
//                   <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Live
//                   </div>
//                   <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Github Link
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* SMALL PROJECTS */}
//         <div className='mb-10'>
//           <p>
//             <span className="text-accent text-2xl">#</span>{' '}
//             <span className="text-white text-2xl">small-projects</span>
//           </p>

//           <div className='flex flex-col md:flex-row gap-4 mt-10'>

//             <div className='w-full border border-gray-300'>
//               <div className='text-white p-2 border-b'>Discord.js , TS , JS</div>
//               <div className='p-2 flex flex-col gap-y-2.5'>
//                 <p className='text-xl text-white'>TypeScript</p>
//                 <p className='text-gray-400'>JavaScript</p>
//                 <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Github Link
//                   </div>
//               </div>
//             </div>

//             <div className='w-full border border-gray-300'>
//               <div className='text-white p-2 border-b'>Discord.js , TS , JS</div>
//               <div className='p-2 flex flex-col gap-y-2.5'>
//                 <p className='text-xl text-white'>TypeScript</p>
//                 <p className='text-gray-400'>JavaScript</p>
//                 <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Github Link
//                   </div>
//               </div>
//             </div>

//              <div className='w-full border border-gray-300'>
//               <div className='text-white p-2 border-b'>Discord.js , TS , JS</div>
//               <div className='p-2 flex flex-col gap-y-2.5'>
//                 <p className='text-xl text-white'>TypeScript</p>
//                 <p className='text-gray-400'>JavaScript</p>
//                 <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
//                     Github Link
//                   </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Projects

import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {

  const cards = [
    {
      title: "ChertNodes",
      desc: "Minecraft servers hosting",
      tech: "Tailwind · React · Express · MongoDB",
      img: "/kri.png"
    },
    {
      title: "ChertNodes",
      desc: "Minecraft servers hosting",
      tech: "Tailwind · React · Express · MongoDB",
      img: "/kri.png"
    },
    {
      title: "ChertNodes",
      desc: "Minecraft servers hosting",
      tech: "Tailwind · React · Express · MongoDB",
      img: "/kri.png"
    }
  ];

  const smallCards = [
    { title: "TypeScript", desc: "JavaScript", tech: "Discord.js , TS , JS" },
    { title: "TypeScript", desc: "JavaScript", tech: "Discord.js , TS , JS" },
    { title: "TypeScript", desc: "JavaScript", tech: "Discord.js , TS , JS" }
  ];

  return (
    <div className="w-full">

      {/* ===== CENTER CONTAINER (1024px) ===== */}
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col gap-y-10">

        {/* HEADER */}
        <motion.div
          className='flex flex-col gap-y-2.5'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            <span className="text-accent text-2xl">/</span>{' '}
            <span className="text-white text-2xl">projects</span>
          </p>
          <p className='text-base text-gray-400'>List of my projects</p>
        </motion.div>

        {/* COMPLETE PROJECTS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <p>
            <span className="text-accent text-2xl">#</span>{' '}
            <span className="text-white text-2xl">complete-projects</span>
          </p>

          {/* PROJECT CARDS */}
          <div className='flex flex-col md:flex-row gap-4 mt-6'>
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className='w-full border border-gray-200 overflow-hidden'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className='h-52 overflow-hidden'>
                  <img
                    className='w-full h-full object-cover transition-all duration-300 hover:scale-110'
                    src={card.img}
                    alt=""
                  />
                </div>

                <div className='text-gray-400 border-t border-gray-400 p-2'>
                  {card.tech}
                </div>

                <div className='p-4'>
                  <p className='text-2xl font-mono text-white'>{card.title}</p>
                  <p className='text-gray-300 py-4'>
                    {card.desc}
                  </p>

                  <div className='flex gap-4'>
                    <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
                      Live
                    </div>
                    <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
                      Github Link
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SMALL PROJECTS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className='mb-10'
        >
          <p>
            <span className="text-accent text-2xl">#</span>{' '}
            <span className="text-white text-2xl">small-projects</span>
          </p>

          <div className='flex flex-col md:flex-row gap-4 mt-10'>
            {smallCards.map((card, i) => (
              <motion.div
                key={i}
                className='w-full border border-gray-300'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className='text-white p-2 border-b'>{card.tech}</div>
                <div className='p-2 flex flex-col gap-y-2.5'>
                  <p className='text-xl text-white'>{card.title}</p>
                  <p className='text-gray-400'>{card.desc}</p>
                  <div className='border border-accent px-4 py-2 w-full text-center text-white hover:bg-accent'>
                      Github Link
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Projects;
