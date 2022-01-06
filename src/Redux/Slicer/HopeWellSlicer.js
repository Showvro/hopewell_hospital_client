import { createSlice } from "@reduxjs/toolkit";
import { fetchApData, fetchBlogsData, fetchDoctorData } from "./Fetch";

const initialState = {
  BlogsData: [],
  DoctorData: [],
  AppoinmentData: [],
  dataLoading: false,
};

export const HopeWellSlice = createSlice({
  name: "HopeWell",
  initialState,
  reducers: {
    NewAction: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBlogsData.pending, (state, action) => {
      state.dataLoading = true;
    });
    builder.addCase(fetchBlogsData.fulfilled, (state, action) => {
      state.dataLoading = false;
      state.BlogsData = action.payload;
    });
    builder.addCase(fetchDoctorData.pending, (state, action) => {
      state.dataLoading = true;
    });
    builder.addCase(fetchDoctorData.fulfilled, (state, action) => {
      state.dataLoading = false;
      state.DoctorData = action.payload;
    });
    builder.addCase(fetchApData.pending, (state, action) => {
      state.dataLoading = true;
    });
    builder.addCase(fetchApData.fulfilled, (state, action) => {
      state.dataLoading = false;
      state.AppoinmentData = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { NewAction } = HopeWellSlice.actions;

export default HopeWellSlice.reducer;
