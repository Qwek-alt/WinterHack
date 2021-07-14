import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Tag = ({ tag }) => {
    return (
        <div className="tag">
            {tag.text}
            {console.log(tag.tag)}
            <div>
                <FaTimes />
            </div>
            
        </div>
    )
}

export default Tag
