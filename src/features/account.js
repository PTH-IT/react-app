import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  User: {}
}

export const accountSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeAccount:(state, action)=>{
        state.User = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {changeAccount } = accountSlice.actions

export default accountSlice.reducer