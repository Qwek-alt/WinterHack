import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!question || !answer){
            alert('Plase add a question and answer')
            return
        }

        onAdd({ question, answer })

        setQuestion('')
        setAnswer('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Question</label>
                <input 
                    type='text' 
                    placeholder='Add Question' 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Answer</label>
                <input 
                    type='text' 
                    placeholder='Add Answer' 
                    value={answer} 
                    onChange={(e) => setAnswer(e.target.value)} 
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-'/>
        </form>
    )
}

export default AddTask
