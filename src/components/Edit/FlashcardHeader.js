import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const FlashcardHeader = ({ onDelete, flashcard}) => {
    return (
        <div className="flashcard-header">
            <div className="tool">
                <FaTrashAlt onClick={() => onDelete(flashcard.id)} />
            </div>
        </div>
    )
}

export default FlashcardHeader
