"use client";
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const defaultEnrollment = { _id: "Dummy Id", user: "Dummy User Id", course: "Dummy Course Id" };

const initialState = {
 enrollments: enrollments,
 enrollment: defaultEnrollment,
};

const enrollmentSlice = createSlice({
 name: "enrollments",
 initialState,
 reducers: {

   addNewEnrollment: (state, action) => {
     const { enrollment } = action.payload;

     const newEnrollments = [
      ...state.enrollments,
      { ...enrollment }
     ];
     state.enrollments = newEnrollments;
     state.enrollment = defaultEnrollment;
   },

   updateEnrollment: (state, { payload: enrollment }) => {
    const newCourses = state.enrollments.map((c) =>
       c._id === enrollment._id ? enrollment : c
     );
     state.enrollments = newCourses;
     state.enrollment = defaultEnrollment;
   },

   deleteEnrollment: (state, { payload: enrollmentId }) => {
    const newEnrollments = state.enrollments.filter(
       (enrollment) => enrollment._id !== enrollmentId
     );
     state.enrollments = newEnrollments
   },

   setEnrollment: (state, { payload: enrollment }) => {
     state.enrollment = enrollment;
   },
 },
});

export const { addNewEnrollment, deleteEnrollment, updateEnrollment, setEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
