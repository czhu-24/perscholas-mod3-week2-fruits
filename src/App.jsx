import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Fruits from './pages/Fruits'
import CreateFruits from './pages/CreateFruits'

function App() {

  return (
    <>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/create">Create</Link>
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/create" element={<CreateFruits />} />
      </Routes>
    </>
  )
}

export default App
