import Quiz from './components/Quiz'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>

  )
}

export default App
