import { configureStore } from '@reduxjs/toolkit';
import tintucReducer from "../features/container/admin/tintuc/tintucSlice"
import userReducer from './userSlice';
const rootReducer = {
  tintucs: tintucReducer,
  user: userReducer
}

export default configureStore({
  reducer: rootReducer
}); 
