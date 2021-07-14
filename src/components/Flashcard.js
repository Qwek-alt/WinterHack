import React from 'react'
import { useState } from 'react'
import FlashcardHeader from './FlashcardHeader'

const Flashcard = ({ flashcard, onDelete }) => {
    const [flip, setFlip] = useState(false)

    return (
        <div 
            className={`flashcard ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <FlashcardHeader 
                flip={flip} 
                flashcard={flashcard}
                onDelete={onDelete} />
            <div>
                {flip ? flashcard.answer : flashcard.question}
            </div>
        </div>
    )
}

export default Flashcard
