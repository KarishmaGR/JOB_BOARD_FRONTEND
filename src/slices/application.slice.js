import { createSlice } from "@reduxjs/toolkit";

const initialstates = {
  applicationdata: null,
  loading: false,
  appliactions: null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState: initialstates,
  reducers: {
    setApplication: (state, action) => {
      state.appliactions = action.payload;
    },
    setApplicationData: (state, action) => {
      state.applicationdata = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setApplication, setApplicationData, setLoading } =
  applicationSlice.actions;

export default applicationSlice.reducer;
