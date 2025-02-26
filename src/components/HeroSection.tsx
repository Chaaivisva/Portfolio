import { useState } from "react";
import { motion } from "framer-motion";
import heroLogo from "../assets/IMG_20240714_150307_461.jpg";

export const HeroSection = () => {
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}  // 👈 Ensures effect happens every time
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img
                        src={heroLogo}
                        alt="Chaai Visva"
                        className="w-full h-64 md:h-96 object-cover rounded"
                    />
                    <motion.h2
                        className="absolute bottom-2 left-2 bg-white bg-opacity-75 p-2 text-xl font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}  // 👈 Ensures effect happens every time
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        Welcome to ChaaiNotes
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}  // 👈 Ensures effect happens every time
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <h2 className='text-4xl font-bold mt-16'>
                        Hii Everyone, I'm <span className='underline'>Chaaivisva</span>
                    </h2>
                    <h3 className='text-xl text-gray-800 font-semibold underline mt-2'>Web Developer</h3>
                    <p className='text-gray-500 mt-8 text-xl'>
                        “If debugging is the process of removing software bugs, then programming must be the process of putting them in...” 
                    </p>
                </motion.div>
            </div>

            <motion.div 
                className='mt-8 py-6 border-b-2 border-gray-500'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}  // 👈 Ensures effect happens every time
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <h2 className='text-2xl font-bold'>About Me</h2>

                {/* First Paragraph */}
                <p className='mt-6 whitespace-pre-line text-lg md:block hidden'>
                    I am a passionate web developer with a strong foundation in full-stack development, specializing in technologies like Django, React, and Express. With hands-on experience in building scalable web applications, I excel in both frontend and backend development, working with databases like PostgreSQL and MongoDB. My journey has been shaped by continuous learning, active participation in coding communities, and competitive hackathons that have honed my problem-solving skills. I am always eager to explore new technologies and frameworks to enhance my skills and contribute to real-world projects.
                </p>

                <p className='mt-6 whitespace-pre-line text-lg md:hidden'>
                    {showMore
                        ? `I am a passionate web developer with a strong foundation in full-stack development, specializing in technologies like Django, React, and Express. With hands-on experience in building scalable web applications, I excel in both frontend and backend development, working with databases like PostgreSQL and MongoDB. My journey has been shaped by continuous learning, active participation in coding communities, and competitive hackathons that have honed my problem-solving skills. I am always eager to explore new technologies and frameworks to enhance my skills and contribute to real-world projects.`
                        : `I am a passionate web developer with a strong foundation in full-stack development, specializing in Django, React, and Express...`}
                </p>

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-500 font-semibold mt-2 block md:hidden"
                >
                    {showMore ? "Read Less" : "Read More"}
                </button>

                {/* Second Paragraph */}
                <p className='mt-6 whitespace-pre-line text-lg md:block hidden'>
                    Currently, I am pursuing a Bachelor’s degree in Computer Science at Kumaraguru College of Technology, where I have been recognized with the Mahatma Gandhi Scholarship for academic excellence. My internship at iQube provided me with real-world experience, reinforcing my ability to work on diverse projects. Beyond coding, I enjoy exploring AI-driven innovations, contributing to open-source projects, and collaborating with like-minded developers to push the boundaries of technology.
                </p>

                <p className='mt-6 whitespace-pre-line text-lg md:hidden'>
                    {showMore2
                        ? `Currently, I am pursuing a Bachelor’s degree in Computer Science at Kumaraguru College of Technology, where I have been recognized with the Mahatma Gandhi Scholarship for academic excellence. My internship at iQube provided me with real-world experience, reinforcing my ability to work on diverse projects. Beyond coding, I enjoy exploring AI-driven innovations, contributing to open-source projects, and collaborating with like-minded developers to push the boundaries of technology.`
                        : `Currently, I am pursuing a Bachelor’s degree in Computer Science at Kumaraguru College of Technology...`}
                </p>

                <button
                    onClick={() => setShowMore2(!showMore2)}
                    className="text-blue-500 font-semibold mt-2 block md:hidden"
                >
                    {showMore2 ? "Read Less" : "Read More"}
                </button>
            </motion.div>
        </>
    );
};
