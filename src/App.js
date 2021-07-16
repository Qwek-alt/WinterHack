// Import React Dependncies
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

// Import Stylesheet
import './index.css'

// Import Custom Components
import Header from './components/Header'
import FlashcardList from './components/Edit/FlashcardList'
import { FaPlus} from 'react-icons/fa'

function App() {
  // Temporary Flashcard Array #TODO: backend database
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
  
  // Connect to socket.io

  useEffect(() => {
    const socket = io("http://localhost:30001")

    return () => {
        socket.disconnect()
    }
})  

  return (
    
    <div className="App">
      <Header />
      {/* <AddFlashcardForm onAdd={addFlashcard} /> */}

      {flashcards.length > 0 ? (
        <FlashcardList
          flashcards={flashcards}
          onDelete={deleteFlashcard}
        />)
        : (<p><br></br>No Flashcards To Show. 🤷</p>)
      }
      <div className="add-button">
        <FaPlus className="btn" size={20} onClick={addFlashcard} />
      </div>
      
    </div>
  );
}

export default App;
