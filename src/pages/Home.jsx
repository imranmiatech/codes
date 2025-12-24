// import React from "react";
// import "../components/home.css";
// import Great from "../components/Great";
// import Project from "../components/Project";
// import About from "../components/About";
// import Contact from "../components/Contact";


// const Home = () => {
 
//   return (
//     <div className="w-full flex flex-col justify-center items-center">
//       <div className="w-full max-w-5xl flex flex-col items-center">
        
//         <div className="px-4 flex flex-col lg:flex-row 
//                         justify-center items-center 
//                         gap-16 mt-16 pb-28">
          
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col gap-8 text-center lg:text-left">
//             <div className="text-[32px] sm:text-[28px] md:text-[32px] lg:text-[36px] 
//                             max-w-xl font-semibold text-white font-mono">
//               <span>Imran is a </span>
//               <span className="text-[#C778DD]">web designer</span>{" "}
//               <span>and </span>
//               <span className="text-[#C778DD]">front-end developer</span>
//             </div>

//             <div className="flex flex-col gap-8 mt-4 items-center lg:items-start">
//               <div className="text-base font-medium text-white opacity-50 max-w-md font-mono">
//                 He crafts responsive websites where technologies meet creativity
//               </div>

//               <button className="h-9 w-38 flex items-center justify-center 
//                                  text-white border border-gray-300 
//                                  hover:bg-[#C778DD] font-mono">
//                 Contact me!!
//               </button>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div  className="flex flex-col items-center gap-6">
//             <div className="max-w-117.5 h-80 bg-[url('/Image.png')] bg-cover bg-no-repeat">
//               <img className="p-4 relative" src="/behind.png" alt="" />
//             </div>

//             <button className="h-9 w-full flex gap-2 items-center justify-center 
//                                text-white border border-gray-300 
//                                hover:bg-[#C778DD] font-mono">
//               <div className="bg-accent h-3 w-3"></div>
//               Download Resume
//             </button>
//           </div>

//         </div>

        
//       </div>
//       <Great />
//       <Project />
//       <About />
//       <Contact/>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { motion } from "framer-motion";
import "../components/home.css";
import Great from "../components/Great";
import Project from "../components/Project";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl flex flex-col items-center"
      >
        <div className="px-4 flex flex-col lg:flex-row justify-center items-center gap-16 mt-16 pb-28">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="text-[32px] sm:text-[28px] md:text-[32px] lg:text-[36px] max-w-xl font-semibold text-white font-mono">
              <span>Imran | </span>
              <span className="text-[#C778DD]">Full Stack Web</span>{" "}
              <span>Application</span> {" "}
              <span className="text-[#C778DD]">Developer.</span>
            </div>

            <div className="flex flex-col gap-8 mt-4 items-center lg:items-start">
              <div className="text-base font-medium text-white opacity-50 max-w-md font-mono">
                I’m Imran, a full-stack web application developer with expertise in building dynamic, responsive, and scalable web solutions.
                 I specialize in creating modern web applications that combine clean design, efficient performance,
                  and seamless user experience using cutting-edge technologies.
              </div>
              <a href="https://www.linkedin.com/in/md-imran-mia-7089ab286/" target="_blank" rel="noopener noreferrer">
               <button className="h-9 w-38 flex items-center justify-center cursor-pointer 
                                 text-white border border-gray-300 
                                 hover:bg-[#C778DD] font-mono">
                Contact me!!
              </button>
              </a>
             
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center gap-6">
            <div className="max-w-117.5 h-80 bg-[url('/Image.png')] bg-cover bg-no-repeat">
              <img className="p-4 relative" src="/behind.png" alt="" />
            </div>

            <button className="h-9 w-full flex gap-2 items-center justify-center 
                               text-white border border-gray-300 
                               hover:bg-[#C778DD] font-mono">
              <div className="bg-accent h-3 w-3"></div>
              Download Resume
            </button>
          </div>
        </div>
      </motion.div>

      {/* Other sections */}
      
        <Great />     
        <Project />   
        <About />    
        <Contact />

    </div>
  );
};

export default Home;
