
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full text-white py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          className="mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold flex gap-x-2">
            <span className="text-accent">#</span>about-me
          </h2>
          <p className="text-gray-400 mt-1 lg:mt-2 text-sm lg:text-base">Who am I?</p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* RIGHT IMAGE on desktop, top on mobile */}
          <motion.div
            className="order-first lg:order-last flex justify-center lg:justify-end mb-6 lg:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-xs lg:max-w-sm">
              <img
                src="/imrans.png"
                alt="Imran"
                className="w-full z-50"
              />
              <img
                src="/behind.png"
                alt="Decoration"
                className="absolute bottom-0 -right-4 lg:-right-6 opacity-80"
              />
            </div>
          </motion.div>

          {/* LEFT TEXT */}
          <motion.div
            className="space-y-4 lg:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-gray-400 max-w-md mx-auto lg:mx-0 text-sm lg:text-base">
              Hello, I’m Imran!
            </p>
            <p className="font-mono text-gray-400 max-w-md mx-auto lg:mx-0 text-sm lg:text-base">
              I’m a full-stack web developer passionate about building responsive web applications.
              I combine creativity and technology to craft user-friendly experiences. Focused on clean code and modern, scalable solutions.
            </p>
            <p className="font-mono text-gray-400 max-w-md mx-auto lg:mx-0 text-sm lg:text-base">
              Full-stack developer skilled in Node.js, Express, Next.js, React, PostgreSQL, MongoDB, and TypeScript. Building clean, scalable, and efficient web applications.
            </p>
          </motion.div>

        </div>


        {/* ================= EXPERIENCE SECTION ================= */}
        <motion.div
          className="mt-16 lg:mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* EXPERIENCE HEADER */}
          <div className="flex items-center gap-3 mb-10 lg:mb-12">
            <span className="text-accent text-3xl">#</span>
            <h3 className="text-2xl lg:text-3xl font-semibold">experience</h3>
            <div className="flex-1 h-px bg-accent/40"></div>
          </div>

          {/* EXPERIENCE CARDS */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Ongoing Job */}
            <motion.div
              className="border border-gray-400 rounded-md p-4 lg:p-6 hover:border-accent transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-accent text-sm font-medium">17-05-2024 - Present</div>
              <p className="text-white text-xl lg:text-2xl font-semibold mt-1">Frontend Developer</p>
              <p className="text-gray-400 mt-1 font-medium">Softvence IT Ltd</p>
              <ul className="text-gray-400 mt-3 list-disc list-inside space-y-1 text-sm lg:text-base">
                <li>Developing responsive user interfaces with React & Tailwind CSS</li>
                <li>Implementing REST APIs and integrating backend services</li>
                <li>Collaborating with design & product teams for UI/UX improvements</li>
                <li>Maintaining code quality and version control using Git</li>
              </ul>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= SKILLS SECTION ================= */}
        <motion.div
          className="mt-16 lg:mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >

          {/* SKILLS HEADER */}
          <div className="flex items-center gap-3 mb-10 lg:mb-12">
            <span className="text-accent text-3xl">#</span>
            <h3 className="text-2xl lg:text-3xl font-semibold">skills</h3>
            <div className="flex-1 h-px bg-accent/40"></div>
          </div>

          {/* SKILLS CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/skills.png"
                alt="Skills"
                className="w-full max-w-xs lg:max-w-sm"
              />
            </div>

            {/* RIGHT SKILLS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

              {[
                { title: "Languages", items: ["TypeScript", "JavaScript"] },
                { title: "Databases", items: ["PostgreSQL", "MongoDB", "Prisma"] },
                { title: "Frameworks", items: ["React", "Next.js", "Express"] },
                { title: "Tools", items: ["Git", "Linux", "VSCode", "Postman", "Figma"] },
                { title: "Frontend", items: ["HTML", "CSS", "Tailwind", "REST"] },
                { title: "Others", items: ["Notion", "Framer", "GSAP"] },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  className="border border-gray-400 rounded-md hover:border-accent transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="border-b border-gray-700 px-3 lg:px-4 py-2 font-medium">
                    {skill.title}
                  </div>
                  <div className="px-3 lg:px-4 py-3 text-gray-400 text-sm lg:text-base space-y-1">
                    {skill.items.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
