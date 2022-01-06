import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogsData = createAsyncThunk("data/blogsdata", async () => {
  const response = await axios.get(
    "https://fathomless-inlet-67666.herokuapp.com/blogs"
  );
  console.log(response);
  return response.data;
});

export const fetchDoctorData = createAsyncThunk(
  "data/doctorsdata",
  async () => {
    const response = await axios.get(
      "https://fathomless-inlet-67666.herokuapp.com/doctors"
    );
    return await response.data;
  }
);

export const fetchApData = createAsyncThunk(
  "data/appoinmentdata",
  async (token) => {
    const options = {
      url: "https://fathomless-inlet-67666.herokuapp.com/getap",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
    };
    const data = axios(options).then((response) => {
      return response.data;
    });
    return data;
  }
);
