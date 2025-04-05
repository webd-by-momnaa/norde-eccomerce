import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NordeWomen from './NordeWomen/NordeWomen'
import NordeMen from './NordeMen/NordeMen'
import NordeStories from './NordeStories/NordeStories'
import NordeFooter from './NordeFooter'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<NordeWomen/>} path='/'></Route>
        <Route element={<NordeWomen/>} path='/women'></Route>
        <Route element={<NordeMen/>} path='/men'></Route>
        <Route element={<NordeStories/>} path='/everworld-stories'></Route>
      </Routes>
      <NordeFooter/>
    </Router>
    </>
  )
}

export default App
