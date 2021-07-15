import React from 'react'
import { useState } from 'react'
import FlashcardHeader from './FlashcardHeader'
import FieldEdit from './FieldEdit'

const Flashcard = ({ flashcard, onDelete }) => {
    return (
        <div 
            className="flashcard edit"
        >
            <FlashcardHeader 
                flashcard={flashcard}
                onDelete={onDelete} />
            <div className="fields">
                <div className="field">
                    <FieldEdit id={`${flashcard.id}question`}/>
                    {flashcard.question}
                </div>
                <div className="vertical-line"></div>
                <div className="field">
                    <FieldEdit id={`${flashcard.id}answer`} />
                    {flashcard.answer}
                </div>
            </div>
            
        </div>
    )
}

export default Flashcard
