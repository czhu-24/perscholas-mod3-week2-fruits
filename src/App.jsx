import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Fruits from './pages/Fruits'
import CreateFruits from './pages/CreateFruits'

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/create" element={<CreateFruits />} />
      </Routes>
    </>
  )
}

export default App
