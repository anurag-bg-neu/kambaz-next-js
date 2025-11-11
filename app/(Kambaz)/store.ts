import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/CoursesReducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentsReducer from "./Courses/EnrollmentsReducer";

const store = configureStore({
 reducer: {
    coursesReducer,
    modulesReducer,
    accountReducer,
    enrollmentsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
