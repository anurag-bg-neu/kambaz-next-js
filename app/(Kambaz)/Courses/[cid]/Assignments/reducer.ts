"use client";
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "@/app/(Kambaz)/Database";
import { v4 as uuidv4 } from "uuid";

const defaultAssignment = {
  _id: "",
  title: "",
  course: "",
  description: "" ,
  points: "",
  dueDate: "",
  availableDate: "",
  untilDate: ""
}

const initialState = {
 assignments: assignments,
 assignment: defaultAssignment,
};

const assignmentsSlice = createSlice({
 name: "assignments",
 initialState,
 reducers: {

   addAssignment: (state, { payload: assignment }) => {
      const newAssignment = [
        ...state.assignments,
        {
            ...assignment,
            _id: uuidv4(),
            title: state.assignment.title,
            course: state.assignment.course,
            description: state.assignment.description,
            points: state.assignment.points,
            dueDate: state.assignment.dueDate,
            availableDate: state.assignment.availableDate,
            untilDate: state.assignment.untilDate
        }
      ];
      state.assignments = newAssignment;
      state.assignment = defaultAssignment;
    },

   updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
      state.assignment = defaultAssignment;
    },

   deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m) => m._id !== assignmentId);
      state.assignment = defaultAssignment;
    },

   setAssignment: (state, { payload: assignment }) => {
      state.assignment = assignment;
    },
}
});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
