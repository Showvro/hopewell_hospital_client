import React, { useEffect } from "react";
import BlogList from "../BlogList/Bloglist";
import EmptyList from "../common/EmptyList";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBlogsData } from "../../Redux/Slicer/Fetch";

const ShowBlog = () => {
  const dispatch = useDispatch();
  const { BlogsData, dataLoading } = useSelector((state) => state.HopeWellData);
  useEffect(() => {
    dispatch(fetchBlogsData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {dataLoading ? (
        <div className=" flex justify-center items-center my-24">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      ) : (
        <div>
          {/* Blog List & Empty View */}
          {!BlogsData.length ? <EmptyList /> : <BlogList blogs={BlogsData} />}
        </div>
      )}

      <Footer />
    </>
  );
};

export default ShowBlog;
