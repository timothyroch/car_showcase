import React from 'react';

import { ArrowRight } from 'lucide-react'; // Importing the arrow icon
import Blogs from '@/app/blogs/_components/Blogs';

const BlogSection = () => {
  const handleSeeMoreClick = () => {
    // Redirect to /dashboard/blogs when the button is clicked
    window.location.href = '/dashboard/blogs';
  };

  return (
    <div>
      <header className="text-center mt-[60px]">
        <h1 className="text-4xl font-extrabold text-gray-900 mt-7">
          Nos plus récent blogs
        </h1>
        <div className="mt-4 border-b-4 border-gray-300 w-1/4 mx-auto"></div>
      </header>
      <Blogs numberOfBlogs={3} /> {/* Display only the first 3 blogs */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSeeMoreClick}
          className="flex items-center text-blue-600 font-bold text-lg"
        >
          En voir plus <ArrowRight className="ml-2" /> {/* Add arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
