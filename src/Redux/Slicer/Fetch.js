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

export const fetchApData = createAsyncThunk(
  "data/doctorsdata",
  async (token) => {
    const options = {
      url: "http://localhost:5000/makeadmin",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
    };
    axios(options).then((response) => {
      return response.data;
    });
  }
);
