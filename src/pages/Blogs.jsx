import React from 'react';
import Nav from '../components/Nav';
import { toast } from 'react-toastify';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering the MERN Stack in 2025',
    excerpt: 'A complete roadmap and tips to go from beginner to job-ready with MongoDB, Express, React, and Node.js.',
    image: '/images/mern-guide.jpg',
  },
  {
    id: 2,
    title: 'React Native vs Flutter',
    excerpt: 'A developer’s perspective comparing performance, community, and real-world usage.',
    image: '/images/react-native-vs-flutter.jpg',
  },
  {
    id: 3,
    title: 'How I Switched from Banking to Web Dev',
    excerpt: 'My journey from finance diploma holder to full-stack MERN developer.',
    image: '/images/banking-to-dev.jpg',
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-[10vh]">
      <Nav />
      <div className="max-w-6xl mx-auto mt-[4vh]">
        <h1 className="text-4xl font-bold text-center mb-10">BLOG.</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <button className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                onClick={()=> toast.success("🚀 Coming soon... stay tuned!")}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
