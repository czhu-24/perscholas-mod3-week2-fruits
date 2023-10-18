import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Fruits from './pages/Fruits'
import CreateFruits from './pages/CreateFruits'
import Veggies from './pages/Veggies'
import CreateVeggies from './pages/CreateVeggies'

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home (Fruits)</Link>
        <Link to="/create">Create Fruits</Link>
        <Link to="/veggies">Veggies</Link>
        <Link to="/veggies/create">Create Veggies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/create" element={<CreateFruits />} />
        <Route path="/veggies" element={<Veggies />} />
        <Route path="/veggies/create" element={<CreateVeggies />} />
      </Routes>
    </>
  )
}

export default App
