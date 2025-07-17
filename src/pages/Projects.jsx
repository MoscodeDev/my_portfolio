import React from 'react'
import Nav from '../components/Nav'
import ProjectList from '../components/ProjectList'
import { FaArrowDown } from "react-icons/fa";

function Projects() {
  return (
    <div>
      <Nav />
      <div className='h-screen max-h-screen flex flex-col items-center justify-center p-4 text-6xl'>
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=100&duration=4000&pause=5000&color=030C10&repeat=true&width=535&height=200&lines=PROJECTS." alt="PROJECTS." /></a>
        <FaArrowDown className='animate-bounce text-4xl mt-4' />
      </div>
      <ProjectList />
    </div>
  )
}

export default Projects