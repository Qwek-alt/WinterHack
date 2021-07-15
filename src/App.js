import { useState } from 'react'
import './index.css'

import Header from './components/Header'
import FlashcardList from './components/FlashcardList'
import AddFlashcard from './components/AddFlashcard'

function App() {
  const [showAddFlashcard, setShowAddFlashcard] = useState(true)
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: '👉 Poke Me to flip the card!',
      answer: '👋 Hello There, Welcome to my WinterHack Project.',
    },
    {
      id: 2,
      question: '📝 Make New Cards using by filling in the form above.',
      answer: '🗑️ Delete Cards by clicking on the trash bin.',
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
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id))
  }

<<<<<<< HEAD
=======

>>>>>>> parent of 3eea8e5 (Add GitHub Link)
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
