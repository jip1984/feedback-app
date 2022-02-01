import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIcon from './components/AboutIcon'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/feedbackContext.js'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>

            </Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
