import { useState } from 'react'
import './index.css'

import { FaTrashAlt } from 'react-icons/fa'
import Header from './components/Header'
import FlashcardList from './components/FlashcardList'
import AddFlashcard from './components/AddFlashcard'


function App() {
  const [showAddFlashcard, setShowAddFlashcard] = useState(true)
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      id: 2,
      question: 'Question 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lobortis congue. Nam sit amet sem vitae urna consequat tincidunt. Aenean blandit sapien eu enim viverra fringilla.',
      answer: 'Ut tincidunt et massa sed semper. Quisque sollicitudin risus in magna sagittis aliquam.',
    }
  ])

  // Add Flashcard
  const addFlashcard = (flashcard) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newFlashcard = { id, ...flashcard }
    setFlashcards([...flashcards, newFlashcard])
  }

  // Delete Flashcard
  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter((task) => task.id !== id))
  }


  return (
    <div className="App">
      <Header 
        onAdd={() => setShowAddFlashcard(!showAddFlashcard)}
        showAdd={showAddFlashcard}
      />

      {showAddFlashcard && <AddFlashcard onAdd={addFlashcard} />}

      {flashcards.length > 0 ? (
        <FlashcardList
          flashcards={flashcards}
          onDelete={deleteFlashcard}
        />)
        : (<p><br></br>No Flashcards To Show. 🤷</p>)
      }

    </div>
  );
}

export default App;
