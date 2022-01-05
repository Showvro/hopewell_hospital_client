import React, { useState } from "react";
import BlogList from "../BlogList/Bloglist";
import EmptyList from "../common/EmptyList";
import { blogList } from "../config/data";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const ShowBlog = () => {
  const [blogs, setBlogs] = useState(blogList);

  return (
    <>
    <Navbar/>
      <div className="my-12">
        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
      <Footer/>
    </>
  );
};

export default ShowBlog;
