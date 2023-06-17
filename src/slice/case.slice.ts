import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Case } from "@/types/case";
import {
  type_scene,
  location_scene,
  day_scene,
  weather_scene,
} from "@/files/const";

const initialState: Case = {
  type: type_scene.loficafe,
  location: location_scene.outside,
  day: day_scene.day,
  weather: weather_scene.stop_rain,
};
const caseSlice = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    changeType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
      state.location = location_scene.outside;

      // state.weather = weather_scene.stop_rain;
    },
    changeLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    changeDay: (state, action: PayloadAction<string>) => {
      state.day = action.payload;
    },
    changeWeather: (state, action: PayloadAction<string>) => {
      state.weather = action.payload;
    },
  },
});
const { actions, reducer } = caseSlice;
export const { changeType, changeLocation, changeDay, changeWeather } = actions;
export default reducer;
