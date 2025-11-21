import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 enrollments: [],
};

const enrollmentsSlice = createSlice({
 name: "enrollments",
 initialState,
 reducers: {

   setEnrollments: (state, action) => {
     state.enrollments = action.payload;
   },

 },
});

export const { setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
