import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogsData = createAsyncThunk("data/blogsdata", async () => {
  const response = await axios.get("http://localhost:5000/blogs");
  console.log(response);
  return response.data;
});

export const fetchDoctorData = createAsyncThunk(
  "data/doctorsdata",
  async () => {
    const response = await axios.get("http://localhost:5000/doctors");
    return await response.data;
  }
);
