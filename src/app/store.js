import { configureStore } from "@reduxjs/toolkit";
import flashcardsReducer from "./slice";

export default configureStore({
    reducer: {
        flashcards: flashcardsReducer,
    },
});
