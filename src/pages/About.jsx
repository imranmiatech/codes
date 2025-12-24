
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full text-white py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold flex gap-x-2">
            <span className="text-accent">#</span>about-me
          </h2>
          <p className="text-gray-400 mt-2">Who am i?</p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-gray-400 max-w-md mx-auto lg:mx-0">
              Hello, I’m Imran!
            </p>
            <p className="font-mono text-gray-400 max-w-md mx-auto lg:mx-0">
              I’m a full-stack web developer passionate about building responsive web applications.
               I combine creativity and technology to craft user-friendly experiences. Focused on clean code and modern, 
               scalable solutions
            </p>
            <p className="font-mono text-gray-400 max-w-md mx-auto lg:mx-0">
              Full-stack developer skilled in Node.js, Express, Next.js, React, PostgreSQL, MongoDB, and TypeScript. Building clean, scalable, and efficient web applications.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-sm">
              <img
                src="/Image.png"
                alt="Project"
                className="rounded-lg shadow-lg w-full"
              />
              <img
                src="/behind.png"
                alt="Decoration"
                className="absolute -bottom-6 -right-6 w-24 opacity-80"
              />
            </div>
          </motion.div>

        </div>

        {/* ================= SKILLS SECTION ================= */}
        <motion.div
          className="mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >

          {/* SKILLS HEADER */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-accent text-3xl">#</span>
            <h3 className="text-3xl font-semibold">skills</h3>
            <div className="flex-1 h-px bg-accent/40"></div>
          </div>

          {/* SKILLS CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/skills.png"
                alt="Skills"
                className="w-full max-w-sm"
              />
            </div>

            {/* RIGHT SKILLS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {[{
                  title: "Languages",
                  items: ["TypeScript", "JavaScript"],
                },
                {
                  title: "Databases",
                  items: ["PostgreSQL", "MongoDB"],
                },
                {
                  title: "Frameworks",
                  items: ["React", "Next.js", "Express"],
                },
                {
                  title: "Tools",
                  items: ["Git", "Linux", "VSCode", "Postman", "Figma"],
                },
                {
                  title: "Frontend",
                  items: ["HTML", "CSS", "Tailwind", "REST"],
                },
                {
                  title: "Others",
                  items: ["Notion", "Framer", "GSAP"],
                }
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  className="border border-gray-400 rounded-md hover:border-accent transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="border-b border-gray-700 px-4 py-2 font-medium">
                    {skill.title}
                  </div>
                  <div className="px-4 py-3 text-gray-400 text-sm space-y-1">
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
