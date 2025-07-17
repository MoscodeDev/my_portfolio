import React from 'react';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Nav />
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-6 py-12 max-sm:pt-[10vh]">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl max-sm:text-2xl font-bold mb-4">About Me</h1>
        
        <p className="text-lg mb-4 max-sm:text-base">
          Hi, I'm a MERN stack developer with a strong foundation in full-stack development. 
          I've mastered HTML, CSS, React, Node.js, and Express, and I’m currently expanding into 
          React Native to build cross-platform mobile applications.
        </p>

        <p className="text-base text-gray-600 mb-4 max-sm:text-sm">
          My diploma in Banking and Finance gives me a unique advantage — blending technical development 
          skills with business and analytical thinking. This helps me understand real-world use cases, 
          especially in fintech and enterprise applications.
        </p>

        <p className="text-base text-gray-600 mb-4 max-sm:text-sm">
          I'm passionate about building scalable, efficient applications with clean code and modern design. 
          Whether it’s creating APIs with Express or crafting dynamic UIs in React, I love solving problems 
          with practical, elegant solutions.
        </p>

        <p className="text-base text-gray-600 max-sm:text-sm">
          I'm currently focused on real-world projects, sharpening my React Native skills, and building tools 
          that are not only functional, but enjoyable to use.
        </p>
        <div className='flex items-center justify-center mt-6'>

          <div onClick={()=> navigate('/contact')}
          className='cursor-pointer mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-fit'
          >HIRE ME</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
