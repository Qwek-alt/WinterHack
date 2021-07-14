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
      question: 'What is WinterHack?',
      answer: 'A friendly 18 day hackathon to see what you will create in the winter break! 🐱‍💻',
      source: 'CISSA\'s Facebook Page',
    },
    {
      id: 2,
      question: 'When is it?',
      answer: 'WinterHack will be held from the 7th (Wednesday) to the 25th (Sunday) of July. Registration will remain open until the 12th of July. ❄️',
      source: '',
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
