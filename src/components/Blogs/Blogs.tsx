"use client"
import React, { useState } from 'react';
import { antic } from '@/utility/font';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: "Luxury Helicopter Tour to Everest Base Camp",
    category: "Adventure",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5fGVufDB8fDB8fHwy",
    excerpt: "Experience the majesty of Mount Everest from a private helicopter, complete with champagne breakfast at 18,000 feet.",
    featured: true
  },
  {
    id: 2,
    title: "Inside Nepal's Most Exclusive Mountain Lodge",
    category: "Accommodations",
    date: "March 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5fGVufDB8fDB8fHwy",
    excerpt: "Discover the hidden gem of the Himalayas - a luxury lodge combining traditional architecture with modern comfort.",
    featured: true
  },
  {
    id: 3,
    title: "Private Tea Tasting Journey in Ilam",
    category: "Culinary",
    date: "March 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7",
    excerpt: "Join master tea sommeliers for an exclusive tasting experience in Nepal's premier tea estates.",
  },
  {
    id: 4,
    title: "Sacred Temples: Private Dawn Ceremony",
    category: "Culture",
    date: "March 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeXxlbnwwfHwwfHx8Mg%3D%3D",
    excerpt: "Participate in an intimate dawn ceremony with Buddhist monks in ancient temples of Kathmandu.",
  },
  {
    id: 5,
    title: "Luxury Wildlife Safari in Chitwan",
    category: "Wildlife",
    date: "March 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1523496922380-91d5afba98a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGx1eHVyeXxlbnwwfHwwfHx8Mg%3D%3D",
    excerpt: "Track Bengal tigers and rhinoceros from the comfort of premium safari vehicles and luxury tented camps.",
  },
  {
    id: 6,
    title: "Meditation Retreat in the Himalayas",
    category: "Wellness",
    date: "March 3, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c",
    excerpt: "Find inner peace with private meditation sessions led by renowned spiritual masters.",
  },
  {
    id: 7,
    title: "Gourmet Journey Through Kathmandu",
    category: "Culinary",
    date: "February 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
    excerpt: "Experience the finest Nepalese cuisine with private cooking classes and exclusive restaurant tastings.",
  },
  {
    id: 8,
    title: "Hidden Monasteries of Mustang",
    category: "Culture",
    date: "February 25, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGx1eHVyeXxlbnwwfHwwfHx8Mg%3D%3D",
    excerpt: "Journey to the restricted Kingdom of Mustang to explore ancient monasteries and traditional culture.",
  }
];

const categories = ["All", "Adventure", "Culture", "Culinary", "Wildlife", "Wellness", "Accommodations"];

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter(blog => {
    return selectedCategory === "All" || blog.category === selectedCategory;
  });

  const featuredBlogs = blogs.filter(blog => blog.featured);

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
                <h1 className={`${antic.className} text-6xl font-bold mb-6 text-white leading-tight text-center`}>
                  Luxury Travel <span className='text-primary'>Stories</span> from Nepal
                </h1>
                <p className="text-xl text-white/90 font-light text-center max-w-2xl">
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
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className={`text-2xl mb-3 group-hover:text-primary transition-colors ${antic.className}`}>
                    {blog.title}
                  </h3>
                  <p className="text-gray-600">{blog.excerpt}</p>
                  <button className="mt-4 text-primary font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Posts Grid */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className={`text-3xl mb-8 ${antic.className}`}>
          {selectedCategory === "All" ? "Latest Stories" : `${selectedCategory} Stories`}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className={`text-xl mb-3 group-hover:text-primary transition-colors ${antic.className}`}>
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
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