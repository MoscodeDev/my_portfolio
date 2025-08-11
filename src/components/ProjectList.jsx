import React from 'react'
import { toast } from 'react-toastify';
import shop from '../assets/shop.jpg';
import shopweb from '../assets/shopweb.avif';
import jobmate from '../assets/jobmate.jpeg';
import school from "../assets/school.png";

const cards = [
  {
    title: 'Project One',
    image: jobmate,
    description: 'Career tool website',
    source: "https://moscodedev.github.io/jobmate_frontend/"
  },
  {
    title: 'Project Two',
    image: school,
    description: 'School management system.',
  },
  {
    title: 'Project Three',
    image: shop,
    description: 'E-commerce app.',
  },
];


const ProjectList = () => {
  return (
  <div className="min-h-screen bg-white flex items-center justify-center rounded-tl-4xl max-sm:pt-10 pb-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <div key={index}
        onClick={()=> {
          if (card.source) {
            window.location.href = card.source;
          } else {
          toast.success("⏳ Hold on... coming soon!");
          }}}
         className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          />
          <h2 className="text-xl font-bold mt-2">{card.title}</h2>
          <p className="text-gray-700 mt-1">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
);

} 

export default ProjectList