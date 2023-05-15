import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import BookTaxi from "./pages/BookTaxi"
import Booked from "./pages/Booked"
import { AuthContext } from "./context/AuthContext"

function App() {
  const {user} = useContext(AuthContext)

  console.log(user)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
      <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
      <Route path='/book-new' element={user ? <BookTaxi /> : <Navigate to="/login" />} />
      <Route path='/booked' element={user ? <Booked /> : <Navigate to="/login" />} />
    </Routes>
  )
}

export default App
