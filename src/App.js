import { useState } from 'react'
import './index.css'
import Header from './components/Header'


function App() {
  const [showAddFlashcard, setShowAddFlashcard] = useState(false)
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      id: 2,
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lobortis congue. Nam sit amet sem vitae urna consequat tincidunt. Aenean blandit sapien eu enim viverra fringilla.',
      answer: 'Ut tincidunt et massa sed semper. Quisque sollicitudin risus in magna sagittis aliquam.',
    }
  ])
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
