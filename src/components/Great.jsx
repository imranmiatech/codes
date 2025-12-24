// import React from "react";
// import { motion } from "framer-motion";

// const Great = () => {
   
     
//     return (
//         <div className="w-full relative">

//             {/* DECORATION BOX — FULL WIDTH CONTROL */}
//             <div className="border border-gray-300 w-22.5 h-22.5 hidden md:flex lg:flex
//                       absolute top-0 -right-2">
//             </div>


//             {/* CONTENT */}
//             <div  className="w-full flex justify-center">
//                 <div
//                     className="w-full max-w-5xl flex flex-col
//                items-center md:items-end 
//                text-white relative"
//                 >

//                     < motion.div  className="p-6 sm:p-8 max-w-xl border border-gray-400
//                     font-medium text-xl sm:text-2xl relative
//                     text-center md:text-right
//                     initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }} 
//         transition={{ duration: 1, ease: "easeOut"}}
//          ">
//                         With great power comes great electricity bill
//                         <img
//                             className="w-8 sm:w-10 absolute -top-2.5 left-2.5"
//                             src="/ques.png"
//                             alt=""
//                         />
//                     </motion.div>

//                     <div className="p-6 sm:p-8 mt-4 max-w-sm border border-gray-400
//                     font-medium text-xl sm:text-2xl relative
//                     text-center md:text-right">
//                         - Dr. Who
//                         <img
//                             className="w-8 sm:w-10 absolute -top-2.5 left-2.5"
//                             src="/ques.png"
//                             alt=""
//                         />
//                     </div>

//                 </div>
//             </div>
           
      
    
//         </div>
//     );
// };

// export default Great;
import React from "react";
import { motion } from "framer-motion";

const Great = () => {
  return (
    <div className="w-full relative px-4">

      {/* DECORATION BOX — FULL WIDTH CONTROL */}
      <div
        className="border border-gray-300 w-22.5 h-22.5 hidden md:flex lg:flex
                    absolute top-0 -right-2"
      ></div>

      {/* CONTENT */}
      <div className="w-full flex justify-center">
        <div
          className="w-full max-w-5xl flex flex-col
                     items-center md:items-end 
                     text-white relative"
        >
          <motion.div
            className="p-4 sm:p-6 max-w-xl border border-gray-400
                       font-medium text-xl sm:text-2xl relative
                       text-center md:text-right"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Building responsive web applications from front-end to back-end.
            <img
              className="w-8 sm:w-10 absolute -top-2.5 left-2.5"
              src="/ques.png"
              alt=""
            />
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 mt-4 max-w-sm border border-gray-400
                       font-medium text-xl sm:text-2xl relative
                       text-center md:text-right"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            - Imran
            <img
              className="w-8 sm:w-10 absolute -top-2.5 left-2.5"
              src="/ques.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Great;
