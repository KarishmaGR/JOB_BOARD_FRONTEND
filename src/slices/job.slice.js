import { createSlice } from "@reduxjs/toolkit";

const initialstates = {
  job: null,
  loading: false,
};

const jobSlice = createSlice({
  name: "job",
  initialState: initialstates,
  reducers: {
    setJob: (state, action) => {
      state.user = action.payload;
    },
    setJobData: (state, action) => {
      state.signupData = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setJob, setJobData, setLoading } = jobSlice.actions;

export default jobSlice.reducer;
