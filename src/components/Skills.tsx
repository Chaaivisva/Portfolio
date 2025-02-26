"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/Html.png";
import cssIcon from "../assets/Css.png";
import jsIcon from "../assets/Js.png";
import tsIcon from "../assets/Ts.png";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/TailwindCss.png";
import bootstrapIcon from "../assets/bootstrap.png";
import nodeIcon from "../assets/NodeJs.png";
import mongodbIcon from "../assets/mongodb.png";
import postgresqlIcon from "../assets/postgresql.png";
import mysqlIcon from "../assets/MySql.png";
import pythonIcon from "../assets/python.png";
import djangoIcon from "../assets/django.png";
import flaskIcon from "../assets/flask.png";
import githubIcon from "../assets/github.png";
import gitIcon from "../assets/git.png";
import vscodeIcon from "../assets/vsCode.png";
import linuxIcon from "../assets/Linux.png";

const skills = [
  { id: 1, name: "HTML", icon: htmlIcon },
  { id: 2, name: "CSS", icon: cssIcon },
  { id: 3, name: "JavaScript", icon: jsIcon },
  { id: 4, name: "TypeScript", icon: tsIcon },
  { id: 5, name: "React.js", icon: reactIcon },
  { id: 6, name: "TailwindCSS", icon: tailwindIcon },
  { id: 7, name: "Bootstrap", icon: bootstrapIcon },
  { id: 8, name: "Node.js", icon: nodeIcon },
  { id: 9, name: "MongoDB", icon: mongodbIcon },
  { id: 17, name: "PostgreSQL", icon: postgresqlIcon },
  { id: 10, name: "MySQL", icon: mysqlIcon },
  { id: 11, name: "Python", icon: pythonIcon },
  { id: 12, name: "Django", icon: djangoIcon },
  { id: 13, name: "Flask", icon: flaskIcon },
  { id: 15, name: "Git", icon: gitIcon },
  { id: 14, name: "GitHub", icon: githubIcon },
  { id: 16, name: "VS Code", icon: vscodeIcon },
  { id: 18, name: "Linux", icon: linuxIcon }
];

export const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
      id = "skills"
      ref={sectionRef}
      className="mt-10 border-b-2 border-t-2 border-gray-300 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            <span className="text-lg font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
