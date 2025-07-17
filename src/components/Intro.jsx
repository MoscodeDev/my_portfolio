import React,{useState, useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {FaReact, FaCss3Alt, FaNodeJs, FaHtml5, FaJs, FaGitAlt, FaGithub, FaDocker, FaFigma, FaBootstrap, FaSass, FaBug, FaLock } from "react-icons/fa";
import { SiExpress, SiMongoose, SiGraphql, SiPassport, SiApollographql, SiAuth0 } from "react-icons/si";
import { GiCampCookingPot } from "react-icons/gi";

const techItems = [
  { label: "React", icon: <FaReact /> },
  { label: "Tailwind", icon: <FaCss3Alt /> },
  { label: "MERN", icon: <FaNodeJs /> },
  { label: "HTML5", icon: <FaHtml5 /> },
  { label: "JavaScript", icon: <FaJs /> },
  { label: "Git", icon: <FaGitAlt /> },
  { label: "GitHub", icon: <FaGithub /> },
  { label: "Docker", icon: <FaDocker /> },
  { label: "Figma", icon: <FaFigma /> },
  { label: "Bootstrap", icon: <FaBootstrap /> },
  { label: "Sass", icon: <FaSass /> },
  { label: "Express", icon: <SiExpress /> },
  { label: "Mongoose", icon: <SiMongoose /> },
  { label: "GraphQL", icon: <SiGraphql /> },
  { label: "Apollo", icon: <SiApollographql /> },
  { label: "Passport.js", icon: <SiPassport /> },
  { label: "Auth", icon: <SiAuth0 /> },
  { label: "Debugging", icon: <FaBug /> },
  {label: "Let me cook!!", icon: <GiCampCookingPot />},
  { label: "Security", icon: <FaLock /> },
];

const getRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
});
const quality = [
  "modern",
  "responsive",
  "accessible",
  "performant",
  "scalable",
  "secure",
];



const Intro = () => {

   const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quality.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quality.length]);

  useEffect(() => {
    const randomItems = techItems.map((item) => ({
      ...item,
      id: Math.random().toString(36).substr(2, 9),
      position: getRandomPosition(),
    }));

    setItems(randomItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => ({ ...item,id:Math.random().toString(36).substr(2, 9), position: getRandomPosition() }))
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="sticky top-0 z-40">
      <div className="relative overflow-hidden h-screen min-h-[100vh] bg-inherit mt-[9vh] z-40">
        <div className="h-full flex items-center flex-col justify-center text-center px-4">
          <div>
            <span className="inline-block bg-green-500 px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm sm:text-base">
              🎉 || Available for freelance work.
            </span>

            <div className="text-4xl sm:text-5xl md:text-7xl font-bold mt-6">
              Hi, I'm Moses Karani
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center mt-4 text-lg sm:text-xl md:text-2xl">
              <div>I build</div>
              <div className="bg-green-600 text-white font-bold w-[150px] text-center py-1 rounded-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 2 }}
                  >
                    {quality[index]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div>websites and apps.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="absolute text-black text-sm flex items-center gap-1"
              style={{ top: item.position.top, left: item.position.left }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              {item.icon}
              <span className="font-bold">{item.label}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Intro