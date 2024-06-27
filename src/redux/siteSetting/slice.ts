import { createSlice } from '@reduxjs/toolkit'

const init = {
  darkMode: false
}

const rootSettings = createSlice({
  name: 'rootSettingsReducer',
  initialState: init,
  reducers: {
    changeTheme: (state,actions) => {
      const currentMode = state.darkMode
      state.darkMode = !currentMode
    }
  }
})

export const { changeTheme } = rootSettings.actions
export default rootSettings.reducer
