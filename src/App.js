import { useState } from "react";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./app/slice";
import Header from "./components/Header";
import FlashcardList from "./components/FlashcardList";
import AddFlashcard from "./components/AddFlashcard";

function App() {
    const flashcards = useSelector((state) => state.flashcards.cards);
    const dispatch = useDispatch();

    const [showAddFlashcard, setShowAddFlashcard] = useState(true);

    // Add Flashcard
    const addFlashcard = (flashcard) => {
        dispatch(add(flashcard));
    };

    // Delete Flashcard
    const deleteFlashcard = (id) => {
        dispatch(remove(id));
    };

    return (
        <div className="App">
            <Header
                onAdd={() => setShowAddFlashcard(!showAddFlashcard)}
                showAdd={showAddFlashcard}
            />

            {showAddFlashcard && <AddFlashcard onAdd={addFlashcard} />}

            {flashcards.length > 0 ? (
                <FlashcardList
                    flashcards={flashcards}
                    onDelete={deleteFlashcard}
                />
            ) : (
                <p>
                    <br></br>No Flashcards To Show. 🤷
                </p>
            )}
        </div>
    );
}

export default App;
