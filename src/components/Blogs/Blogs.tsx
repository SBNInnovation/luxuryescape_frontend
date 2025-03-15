"use client"
import React, { useState } from 'react';
import { antic } from '@/utility/font';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '@/services/blogs';
import Loader from '@/shared/Loader';
import NoDataFound from '@/shared/NoData/NoData';
import { formatDateToReadableDate } from '@/utility/date';
import parse from "html-react-parser"

interface Blog {
  isFeature: boolean;
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  category: {
    _id: string;
    tourType: string;
  };
  description: string;
  link: {
    key: string;
    url: string;
  }[];
  isActive: boolean;
  readTime: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const categories = ["All", "Adventure", "Culture", "Culinary", "Wildlife", "Wellness", "Accommodations"];

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const {data:blogsData,isLoading}=useQuery({
    queryKey:["blogs"],
    queryFn:()=>getBlogs(1,9),
  })

  const filteredBlogs = blogsData?.data?.blogs?.filter((blog:Blog) => {
    return selectedCategory === "All" || blog?.category?.tourType === selectedCategory;
  });

  const featuredBlogs = blogsData?.data?.blogs?.filter((blog:Blog) => blog.isFeature);

  if(isLoading) return <Loader/>

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMG5lcGFsfGVufDB8fDB8fHwy"
                alt="Luxury Hotels in Nepal"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="w-full items-center px-8 h-full flex flex-col justify-center absolute inset-0">
                <h1 className={`${antic.className} lg:text-6xl text-4xl font-bold mb-6 text-white leading-tight text-center`}>
                  Luxury Travel <span className='text-primary'>Stories</span> from Nepal
                </h1>
                <p className="lg:text-xl text-lg text-white/90 font-light text-center max-w-2xl">
                  Discover exclusive experiences and hidden gems in the land of the Himalayas
                </p>
              </div>
        </div>

      {/* Category Filter Section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex justify-center">
            <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      {selectedCategory === "All" && (
        <div className="container mx-auto px-4 mb-16">
          <h2 className={`text-3xl mb-8 ${antic.className}`}>Featured Stories</h2>
          {featuredBlogs?.length===0?
          <NoDataFound title="No Featured Blogs Found"/>
          :
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs?.map((blog:Blog) => (
              <div
                key={blog._id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{formatDateToReadableDate(blog.createdAt)}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className={`text-2xl mb-3 group-hover:text-primary transition-colors ${antic.className}`}>
                    {blog.title}
                  </h3>
                  <p className="text-gray-600">{parse(blog.description.slice(0,100))}</p>
                  <button className="mt-4 text-primary font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          }
        </div>
      )}

      {/* All Posts Grid */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className={`text-3xl mb-8 ${antic.className}`}>
          {selectedCategory === "All" ? "Latest Stories" : `${selectedCategory} Stories`}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs?.map((blog:Blog) => (
            <div
              key={blog._id}
              className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{formatDateToReadableDate(blog.createdAt)}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className={`text-xl mb-3 group-hover:text-primary transition-colors ${antic.className}`}>
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{parse(blog.description?.slice(0,100))}...</p>
                <button className="mt-4 text-primary font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;