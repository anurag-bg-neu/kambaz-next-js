"use client";
import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";

const initialState = {
 courses: courses,
 course: { name: "New Course", description: "New Description" },
 showMenuKambaz: false,
 showMenuCourse: false,
 FaAlignCourseNav : true,
};

const coursesSlice = createSlice({
 name: "courses",
 initialState,
 reducers: {

   addNewCourse: (state, { payload: course }) => {
     const newCourses = [
        ...state.courses,
      { ...course }
    ];
     state.courses = newCourses;
     state.course = { name: "", description: ""};
   },

   updateCourse: (state, { payload: course }) => {
    const newCourses = state.courses.map((c) =>
       c._id === course._id ? course : c
     );
     state.courses = newCourses;
     state.course = { name: "", description: ""};
   },

   deleteCourse: (state, { payload: courseId }) => {
    const newCourses = state.courses.filter(
       (course) => course._id !== courseId
     );
     state.courses = newCourses
   },

   setCourse: (state, { payload: course }) => {
     state.course = course;
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
  addNewCourse, deleteCourse, updateCourse, setCourse,
  setShowMenuKambaz, setShowMenuCourse, setFaAlignCourseNav } = coursesSlice.actions;
export default coursesSlice.reducer;
