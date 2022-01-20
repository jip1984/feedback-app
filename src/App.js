import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx'
import feedbackData from './data/feedbackData.js'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {

  const [feedback, setFeedback] = useState(feedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {

    setFeedback(feedback.filter((item) => item.id !== id))
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
          deleteFeedback={deleteFeedback} />
      </div>
    </>
  )
}

export default App
