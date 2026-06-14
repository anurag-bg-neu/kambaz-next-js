import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {

    setModules: (state, action) => {
      state.modules = action.payload;
    },
  },
});

export const { setModules } = modulesSlice.actions;
export default modulesSlice.reducer;
