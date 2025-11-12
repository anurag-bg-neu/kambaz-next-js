import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/CoursesReducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentsReducer from "./Courses/EnrollmentsReducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer"

const store = configureStore({
 reducer: {
    coursesReducer,
    modulesReducer,
    accountReducer,
    enrollmentsReducer,
    assignmentsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
