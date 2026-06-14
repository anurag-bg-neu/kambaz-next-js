import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 courses: [],
 showMenuKambaz: false,
 showMenuCourse: false,
 FaAlignCourseNav : true,
};

const coursesSlice = createSlice({
 name: "courses",
 initialState,
 reducers: {

   setCourses: (state, action) => {
     state.courses = action.payload;
   },

    setShowMenuKambaz: (state, { payload: Status }) => {
      state.showMenuKambaz = Status;
    },

    setShowMenuCourse: (state, { payload: Status }) => {
      state.showMenuCourse = Status;
    },

    setFaAlignCourseNav: (state, { payload: Status }) => {
      state.FaAlignCourseNav = Status;
    },
 },
});

export const {
  setCourses, setShowMenuKambaz, setShowMenuCourse, setFaAlignCourseNav } = coursesSlice.actions;
export default coursesSlice.reducer;
