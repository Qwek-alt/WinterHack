import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import Tag from './Tag'

const FlashcardHeader = ({ flip, onDelete, flashcard }) => {
    return (
        <div className="flashcard-header">
            <div className="label" style={{background: 'none'}}>
                {flip ? 'ANSWER' : 'QUESTION'}
            </div>

            {flashcard.tags.length > 0 ? (
                flashcard.tags.map((tag) => (
                    <Tag tag={tag}/>
                ))
            ):<></>}
            <div className="tool">
                <FaTrashAlt onClick={() => onDelete(flashcard.id)} />
            </div>
            <div className="tool">
                <FaEdit onClick={() => onDelete(flashcard.id)} />
            </div>
        </div>
    )
}

export default FlashcardHeader
