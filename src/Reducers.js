import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice.js";
import jobReduces from "./slices/job.slice.js";
import ApplicationReducer from "./slices/application.slice.js";

const reducers = combineReducers({
  auth: authReducer,
  job: jobReduces,
  application: ApplicationReducer,
});

export const store = configureStore({
  reducer: reducers,
});
