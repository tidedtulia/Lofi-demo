import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as React from "react";

const initialState = {
  audio: 0.5,
  rain: 0,
  stateRain: false,
  traffic: 0,
  stateTraffic: false,
  keyboard: 0,
  stateKeyboard: false,
  people: 0,
  statePeople: false,
};
const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    changeVolumeAudio: (state, action) => {
      state.audio = action.payload;
    },
    changeVolumeRain: (state, action) => {
      state.rain = action.payload;
    },
    changeVolumeTraffic: (state, action) => {
      state.traffic = action.payload;
    },
    changeVolumeKeyboard: (state, action) => {
      state.keyboard = action.payload;
    },
    changeVolumePeople: (state, action) => {
      state.people = action.payload;
    },
    openButtonRain: (state) => {
      state.rain = 0.5;
      state.stateRain = true;
    },
    closeButtonRain: (state) => {
      state.rain = 0;
      state.stateRain = false;
    },
    openButtonTraffic: (state) => {
      state.traffic = 0.5;
      state.stateTraffic = true;
    },
    closeButtonTraffic: (state) => {
      state.traffic = 0;
      state.stateTraffic = false;
    },
    openButtonKeyboard: (state) => {
      state.keyboard = 0.5;
      state.stateKeyboard = true;
    },
    closeButtonKeyboard: (state) => {
      state.keyboard = 0;
      state.stateKeyboard = false;
    },
    openButtonPeople: (state) => {
      state.people = 0.5;
      state.statePeople = true;
    },
    closeButtonPeople: (state) => {
      state.people = 0;
      state.statePeople = false;
    },
  },
});
const { actions, reducer } = soundSlice;
export const {
  changeVolumeAudio,
  changeVolumeRain,
  changeVolumeTraffic,
  changeVolumeKeyboard,
  changeVolumePeople,

  openButtonRain,
  closeButtonRain,

  openButtonTraffic,
  closeButtonTraffic,

  openButtonKeyboard,
  closeButtonKeyboard,

  openButtonPeople,
  closeButtonPeople,
} = actions;
export default reducer;
