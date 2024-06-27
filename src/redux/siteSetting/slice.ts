import {createSlice} from "@reduxjs/toolkit";

const init = {
    rootSettings : {
        darkMode : false
    }
}

const rootSettings = createSlice({
    name: 'rootSettingsReducer',
    initialState: init,
    reducers: {
        changeTheme: (state, action) => {
            const currentMode = state.rootSettings.darkMode
            state.rootSettings.darkMode = !currentMode
        }

    }
})

export const {changeTheme} = rootSettings.actions
export default rootSettings.reducer