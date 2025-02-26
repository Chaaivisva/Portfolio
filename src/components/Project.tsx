"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import videoConfrencingAppImage from "../assets/video_confrencing_app.png";
import ethicalHiringPlatformImage from "../assets/ethical_hiring.png";
import inventoryManagementImage from "../assets/inventory_management.png";
import restaurantManagementImage from "../assets/Restaurant_management.png";
import plantDiseaseSuggestionImage from "../assets/plant_disease_suggestion.png";
import puddlleWebsiteImage from "../assets/Puddle_website.png";

const newsArticles = [
  {
    id: 1,
    image: videoConfrencingAppImage,
    title: "Video Conferencing App",
    description:
      "A fast and reliable video conferencing app designed to enhance remote collaboration, supporting SDG 08: Decent Work and Economic Growth by enabling seamless communication across teams and businesses. Built with the MERN stack, it leverages WebRTC for real-time video streaming, Socket.io for low-latency interactions, and Tailwind CSS for a sleek, responsive user interface. This solution ensures high-quality video calls, secure connections, and scalable performance, making virtual meetings more efficient and accessible for remote professionals and organizations.",
    source1: { name: "Source Link", link: "#" },
    time: "January 21, 2025",
    author: "Chaaivisva, Anudeep, Karthikeyan",
  },
  {
    id: 2,
    image: ethicalHiringPlatformImage,
    title: "Ethical Hiring Platform",
    description:
      "An AI-powered Applicant Tracking System (ATS) and video screening platform designed to ensure fair and unbiased hiring, supporting SDG 10: Reduced Inequalities by eliminating bias in recruitment. Built with Django and RESTful APIs, it integrates LlamaIndex Core and Retrieval-Augmented Generation (RAG) to analyze resumes intelligently and assess candidates based on skills and experience. The system leverages Celery for efficient task management and SQLite3 for secure data handling, ensuring a transparent, data-driven hiring process that promotes diversity and equal opportunities in the workforce.",
    source1: { name: "Source Link", link: "https://github.com/Chaaivisva/Ethical_hiring" },
    time: "September 23, 2024",
    author: "Chaaivisva, Nagulesh, Aravind G",
  },
  {
    id: 3,
    image: inventoryManagementImage,
    title: "Inventory Management System",
    description:
      "A simple and efficient inventory management system designed to track stock, manage inventory, and automate restocking alerts, ensuring smooth operations for businesses. Built with Django and RESTful APIs, it utilizes Celery for asynchronous task execution and Cron Jobs to schedule automated stock updates. The system is powered by PostgreSQL for reliable data storage and runs seamlessly within Docker containers, providing scalability, security, and efficient resource management for businesses of all sizes.",
    source1: { name: "Source Link", link: "https://github.com/Chaaivisva/Inventory-Management" },
    time: "September 08, 2024",
    author: "Chaaivisva, Aravind A, Nagulesh",
  },
  {
    id: 4,
    image: restaurantManagementImage,
    title: "Restaurant Management System",
    description:
      "A smart and intuitive restaurant management system designed to streamline order processing, menu management, and customer interactions, enhancing efficiency for restaurants. Built with Django and RESTful APIs, it leverages SQLite3 for lightweight yet reliable database management. The system includes role-based access control using Groups and Permissions, ensuring secure and organized operations. With its user-friendly interface and automated workflows, it simplifies restaurant administration, improving service quality and overall customer satisfaction.",
    source1: { name: "Source Link", link: "https://github.com/Chaaivisva/Restaurant-Management-System" },
    time: "February 08, 2024",
    author: "Chaaivisva",
  },
  {
    id: 5,
    image: plantDiseaseSuggestionImage,
    title: "Plant Disease Suggestion",
    description:
      "A community-driven plant disease identification and treatment suggestion platform that connects users with experts for accurate guidance. Instead of AI-based analysis, users can upload images of diseased plants, and the system acts as a forum where the Microcosm KCT team provides expert recommendations. Built with Django, it leverages Signals and Channels for real-time interactions, along with RESTful APIs for smooth data handling and SQLite3 for efficient storage. This platform fosters collaborative learning and agricultural support, helping farmers and gardeners receive timely and reliable plant care advice.",
    source1: { name: "Source Link", link: "https://github.com/Chaaivisva/Plant-Disease-Suggestion" },
    time: "January 17, 2024",
    author: "Chaaivisva",
  },
  {
    id: 6,
    image: puddlleWebsiteImage,
    title: "Puddle System",
    description:
      "A user-friendly marketplace that allows individuals to buy and sell items effortlessly through photos and videos. Sellers can upload images, set prices, and list their products, while interested buyers can contact them directly through the platform to make a purchase. Built with Django, it utilizes Signals and Channels for real-time communication, RESTful APIs for seamless data exchange, and SQLite3 for efficient storage. This platform ensures a smooth and secure buying and selling experience, making online transactions more interactive and convenient for users.",
    source1: { name: "Source Link", link: "https://github.com/Chaaivisva/Puddle-website" },
    time: "September 26, 2023",
    author: "Chaaivisva",
  },
];

export const Project = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // 30% visibility triggers animation
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id = "projects"
      ref={sectionRef}
      className="mt-10 bg-white text-black p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      {/* Scrollable Section */}
      <motion.div
        className="h-[500px] md:h-[600px] w-full max-w-[1200px] mx-auto overflow-y-auto border border-gray-200 rounded-lg p-4 shadow-lg space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
      >
        {newsArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 p-4 flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            {/* Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full md:w-48 h-40 object-cover rounded-lg"
            />

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-bold">{article.title}</h3>
              <p className="text-gray-600 text-xs">
                {article.time} {article.author && `• By ${article.author}`}
              </p>

              {/* Full Description for md/lg screens */}
              <p className="text-gray-700 mt-2 text-sm hidden md:block lg:block">
                {article.description}
              </p>

              {/* Read More Toggle for sm screens */}
              <p className="text-gray-700 mt-2 text-sm md:hidden lg:hidden">
                {expanded[article.id]
                  ? article.description
                  : `${article.description.substring(0, 120)}...`}
              </p>

              {/* Read More / Read Less Button (Only for sm screens) */}
              <button
                onClick={() => setExpanded({ ...expanded, [article.id]: !expanded[article.id] })}
                className="text-blue-500 font-semibold mt-1 md:hidden lg:hidden"
              >
                {expanded[article.id] ? "Read Less" : "Read More"}
              </button>

              {/* Source Link */}
              <div className="mt-3 flex justify-center md:justify-start">
                <a
                  href={article.source1.link}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs hover:bg-blue-700 transition"
                >
                  {article.source1.name}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
