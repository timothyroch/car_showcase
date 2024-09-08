import React from 'react'
import Blogs from './_components/Blogs'

const page = () => {
  return (
    <div className='bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200'>
            <header className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 pt-7">
          Nos Blogs
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Restez informé des nouvelles automobiles grâce à l'avis de nos experts.
        </p>
        <div className="mt-4 border-b-4 border-gray-300 w-1/4 mx-auto"></div>
      </header>
<Blogs numberOfBlogs={6} />
    </div>
  )
}

export default page