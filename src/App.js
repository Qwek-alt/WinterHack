import { useState } from 'react'
import './index.css'

import Header from './components/Header'
import FlashcardList from './components/FlashcardList'
import AddFlashcard from './components/AddFlashcard'
import Tag from './components/Tag'

function App() {
  const [showAddFlashcard, setShowAddFlashcard] = useState(true)
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: '👉 Poke Me to flip the card!',
      answer: '👋 Hello There, Welcome to my WinterHack Project.',
      tags: [
        {
          id: 1,
          text: 'tag1',
        },
        {
          id: 2,
          text: 'english',
        }
      ],
    },
    {
      id: 2,
      question: '📝 Make New Cards using by filling in the form above.',
      answer: '🗑️ Delete Cards by clicking on the trash bin.',
      tags: [{
        id: 1,
        text: 'tag1'
      }
      ],
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
