import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import BookTaxi from "./pages/BookTaxi"
import Booked from "./pages/Booked"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/book-new' element={<BookTaxi />} />
      <Route path='/booked' element={<Booked />} />
    </Routes>
  )
}

export default App
