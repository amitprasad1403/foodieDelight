import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Home from './Pages/Home'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import Details from './Pages/Details';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/details' element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
