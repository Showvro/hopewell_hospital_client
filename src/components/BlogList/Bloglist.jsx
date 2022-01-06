import React from "react";
import BlogItem from "./BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-800 mb-1 text-center">
          Our Features
        </h1>
        <div className="flex mt-2 items-center justify-center text-center">
          <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex justify-center"></div>
        </div>
      </div>
      {/* blogs showing  */}
      <div className="blogList-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
