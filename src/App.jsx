import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Layouts
import RootLayout from './Layouts/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//Components
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'

const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Login/>} />
            <Route path="home" element={<Header />}>
              <Route index element={<Home/>} />
            </Route>
        </Route>
    )
)
function App() {
 

  return (
    <div className="App">
     <RouterProvider  router={router}/>
    
    </div>
  )
}

export default App
