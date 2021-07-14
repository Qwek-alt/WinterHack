import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Flashcard = ({ flashcard, onDelete }) => {
    const [flip, setFlip] = useState(false)

    return (
        <div 
            className={`flashcard ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            
            <div className="toolbar">
                <div className="tag">
                    {flip ? 'ANSWER' : 'QUESTION'}
                </div>
                <div className="tool">
                    <FaTrashAlt onClick={() => onDelete(flashcard.id)} />
                </div>
            </div>

            <div>
                {flip ? flashcard.answer : flashcard.question}
            </div>
        </div>
    )
}

export default Flashcard
