import React from 'react'
import { useState } from 'react'

const Flashcard = ({ flashcard }) => {
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
            </div>

            <div>
                {flip ? flashcard.answer : flashcard.question}
            </div>
        </div>
    )
}

export default Flashcard
