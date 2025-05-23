import { useEffect, useState } from 'react'
import MainPage from './pages/MainPage'
import Blog from './pages/Blog'
import Videos from './pages/Videos'
import Info from './pages/Info'
import { Routes, Route, NavLink, Outlet } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route index element={ <MainPage /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/videos" element={ <Videos /> } />
        <Route path="/info" element={ <Info /> } />
      </Routes>
    </>
  )
}

export default App
