import { configureStore } from '@reduxjs/toolkit'
import StudentSlice from './features/StudentSlice'
export const store = configureStore({
  reducer: {
      student:StudentSlice
  },
})