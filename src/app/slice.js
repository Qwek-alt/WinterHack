import { createSlice } from "@reduxjs/toolkit";

export const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        cards: [
            {
                id: 1,
                question: "👉 Poke Me to flip the card!",
                answer: "👋 Hello There, Welcome to my WinterHack Project.",
            },
            {
                id: 2,
                question: "📝 Make New Cards by filling in the form above.",
                answer: "🗑️ Delete Cards by clicking on the trash bin.",
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            const id = Math.floor(Math.random() * 1000) + 1;
            const newFlashcard = { id, ...action.payload };
            state.cards = [...state.cards, newFlashcard];
        },
        remove: (state, action) => {
            state.cards = state.cards.filter(
                (flashcard) => flashcard.id !== action.payload.id
            );
        },
    },
});

export const { add, remove } = flashcardsSlice.actions;

export default flashcardsSlice.reducer;
