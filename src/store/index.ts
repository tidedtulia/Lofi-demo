import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import caseReducer from "@/slice/case.slice";
import soundReducer from "@/slice/sound.slice";
import musicReducer from "@/slice/music.slice";
export const store = configureStore({
  reducer: {
    case: caseReducer,
    sound: soundReducer,
    music: musicReducer,
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
