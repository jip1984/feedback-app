import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx'
import feedbackData from './data/feedbackData.js'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIcon from './components/AboutIcon'
import AboutPage from './pages/AboutPage'

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
    <Router>
      <Header />

      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback}
                deleteFeedback={deleteFeedback} />
            </>
          }>

          </Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIcon />
      </div>
    </Router>
  )
}

export default App
