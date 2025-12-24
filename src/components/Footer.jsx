 import React from 'react'
 import { FaGithub, FaFacebookF, FaLinkedin } from "react-icons/fa";
// import '../components/home.css'

const Footer = () => {
  return (
    <div className="w-full flex justify-center border-t border-gray-300">
      <div className="w-full max-w-5xl px-5 py-8 
                      flex flex-col gap-8 text-[14px]">

        {/* TOP */}
        <div className="flex flex-col sm:flex-row 
                        justify-between items-center 
                        gap-8 text-center sm:text-left">

          {/* LEFT */}
          <div className="flex flex-col gap-2 items-center sm:items-start alaign-middle">
            <div className="flex flex-col gap-2 text-white font-mono text-2xl ">
              <span>IMRAN.DEV</span>
              <span className="text-[14px]">
                imranmiatech@gmail.com
              </span>
            </div>

            <div className="text-white opacity-50 font-mono text-[14px]">
              Full Stack Web Application Developer.
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <div className="text-white font-mono">
              Media
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/imranmiatech"> <FaGithub className="text-white opacity-45 hover:opacity-100 text-2xl" /></a>
              <a href="https://www.linkedin.com/in/md-imran-mia-7089ab286/"><FaLinkedin className="text-2xl text-white opacity-45 hover:opacity-100" /></a>
              <a href="https://www.facebook.com/md.imran.428063"><FaFacebookF className="text-2xl text-white opacity-45 hover:opacity-100" /></a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-center text-white text-[14px] opacity-50 font-mono">
          © Copyright 2026. Made by Imran
        </div>

      </div>
    </div>
  );
};

export default Footer;
