"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const ExperienceAndEducation = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on scroll position
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="mt-10 py-10 bg-white text-black"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Experience & Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Experience Card */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="mb-2 font-medium">iQube, Coimbatore — Web Developer Intern</p>
          <p className="text-gray-700 text-sm mb-2">July 2023 - July 2024</p>
          <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
            <li>Explored web development and contributed to real-world projects.</li>
            <li>Level 1 member at iQube, actively participating in coding communities.</li>
            <li>Proficient in frontend and backend concepts, exploring frameworks.</li>
            <li>Completed relevant projects to enhance practical skills.</li>
          </ul>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="mb-2 font-medium">Bachelor of Engineering — Computer Science and Engineering</p>
          <p className="text-gray-700 text-sm mb-2">Kumaraguru College of Technology, Coimbatore, Tamil Nadu</p>
          <p className="text-gray-700 text-sm mb-2">Expected in May 2026</p>
          <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
            <li><span className="font-semibold">GPA:</span> 8.56</li>
            <li>Mahatma Gandhi Scholarship Holder</li>
          </ul>
        </motion.div>

      </div>
    </motion.section>
  );
};
