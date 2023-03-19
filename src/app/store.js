import { configureStore } from '@reduxjs/toolkit'
import accountSlice from '../features/account'
export const store = configureStore({
  Account: accountSlice,
})