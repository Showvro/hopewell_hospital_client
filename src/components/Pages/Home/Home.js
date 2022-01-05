import React, { useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  //Dynamic Title
  useEffect(() => {
    document.title = "Home | Hopewell Hospital";
  }, []);

  return (
    <>
      <Navbar />
      <h1>This is home page</h1>
    </>
  );
};

export default Home;