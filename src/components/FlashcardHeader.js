import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const FlashcardHeader = ({ flip, onDelete, flashcard}) => {
    return (
        <div className="flashcard-header">
            <div className="tag">
                {flip ? 'ANSWER' : 'QUESTION'}
            </div>

            <div className="tool">
                <FaTrashAlt onClick={() => onDelete(flashcard.id)} />
            </div>
        </div>
    )
}

export default FlashcardHeader
