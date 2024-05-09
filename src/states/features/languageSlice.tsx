import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store'

interface languageState {
  value: 'ar' | 'en' | 'fr',
}

const initialState: languageState = {
  value: 'ar',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"ar" | "en" | "fr">) => {
      state.value = action.payload
    }
  }
})

export const { setLanguage } = languageSlice.actions

export const selectLanguage = (state: RootState) => state.language.value

export default languageSlice.reducer