import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'system', // 'light', 'dark', 'system'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
export const selectTheme = (state) => state.theme.theme;
