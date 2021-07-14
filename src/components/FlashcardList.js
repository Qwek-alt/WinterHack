import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards, onDelete }) => {
    return (
        <div className="flashcard-list">
            {flashcards.map((flashcard) => (
                <Flashcard 
                    key={flashcard.id}
                    flashcard={flashcard}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default FlashcardList
