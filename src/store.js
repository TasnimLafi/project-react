import { configureStore } from '@reduxjs/toolkit'
import ComentSlice from './ComentSlice'

export const store = configureStore({
  reducer: {
    comentslicee:ComentSlice
  },
})