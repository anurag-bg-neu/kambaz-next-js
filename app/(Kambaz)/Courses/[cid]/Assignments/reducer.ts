"use client";
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "@/app/(Kambaz)/Database";

const initialState = {
 assignments: assignments,
 assignment: { name: "New Course", description: "New Description" },
};

const assignmentsSlice = createSlice({
 name: "assignments",
 initialState,
 reducers: {

   addAssignment: (state, { payload: assignment }) => {
     const newAssignment = [
        ...state.assignments,
      { ...assignment }
    ];
     state.assignments = newAssignment;
     state.assignment = { name: "", description: ""};
   },

   updateAssignment: (state, { payload: assignment }) => {
    const newAssignment = state.assignments.map((c) =>
       c._id === assignment._id ? assignment : c
     );
     state.assignments = newAssignment;
     state.assignment = { name: "", description: ""};
   },

   deleteAssignment: (state, { payload: assignmentId }) => {
    const newCourses = state.assignments.filter(
       (assignment) => assignment._id !== assignmentId
     );
     state.assignments = newCourses
   },

   setAssignment: (state, { payload: course }) => {
     state.assignment = course;
   },
 },
});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
