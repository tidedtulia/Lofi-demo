import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import caseReducer from "@/slice/case.slice";
import soundReducer from "@/slice/sound.slice";
import musicReducer from "@/slice/music.slice";
import hireReducer from "@/slice/hide.slice";
import pomodoroReducer from "@/slice/pomodoro.slice";
export const store = configureStore({
  reducer: {
    case: caseReducer,
    sound: soundReducer,
    music: musicReducer,
    hide: hireReducer,
    pomodoro: pomodoroReducer,
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
