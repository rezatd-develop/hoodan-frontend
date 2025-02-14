import { createSlice } from '@reduxjs/toolkit';

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: {
    t: null, // Initially, no dictionary loaded
  },
  reducers: {
    setDictionary: (state, action) => {
      state.t = action.payload;
    },
  },
});

export const { setDictionary } = dictionarySlice.actions;
export default dictionarySlice.reducer;