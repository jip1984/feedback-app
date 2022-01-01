import { useState } from 'react'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx'
import feedbackData from './data/feedbackData.js'
import FeedbackStats from './components/FeedbackStats'

const App = () => {

  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }

  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
