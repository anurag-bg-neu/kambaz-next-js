"use client";
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
 enrollments: enrollments,
};

const enrollmentSlice = createSlice({
 name: "enrollments",
 initialState,
 reducers: {

   addNewEnrollment: (state, {payload} : { payload: { userId: string; courseId: string} }) => {
     const newEnrollment = [
      ...state.enrollments,
      {_id: uuidv4(), user: payload.userId, course: payload.courseId}
     ]
     state.enrollments = newEnrollment;
   },

   updateEnrollment: (state, { payload: course }) => {

   },

   deleteEnrollment: (state, { payload: courseId }) => {

   },

   setEnrollment: (state, { payload: course }) => {

   },
 },
});

export const { addNewEnrollment, deleteEnrollment, updateEnrollment, setEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
