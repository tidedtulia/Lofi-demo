import { PomodoroSetting } from "@/types/pomodorosetting";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: PomodoroSetting = {
  workMinutes: 25,
  breakMinutes: 5,
  setting: false,
};
const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    changeWorkMinutes: (state, action: PayloadAction<number>) => {
      state.workMinutes = action.payload;
    },
    changeBreakMinutes: (state, action: PayloadAction<number>) => {
      state.breakMinutes = action.payload;
    },
    changeSetting: (state, action: PayloadAction<boolean>) => {
      state.setting = action.payload;
    },
  },
});
const { actions, reducer } = pomodoroSlice;
export const { changeWorkMinutes, changeBreakMinutes, changeSetting } = actions;
export default reducer;
