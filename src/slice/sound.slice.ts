import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as React from "react";

const initialState = {
  audio: 0.5,
};
const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    changeVolumeAudio: (state, action) => {
      state.audio = action.payload;
    },
  },
});
const { actions, reducer } = soundSlice;
export const { changeVolumeAudio } = actions;
export default reducer;
