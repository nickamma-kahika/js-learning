import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes, Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Deepika from './components/Deepika/Deepika.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />}/>
      <Route path='home' element={<Home />}/>
      <Route path='/deepika' element={<Deepika />}/>
    </Route>

  ) 
)


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router = {router} />
    </StrictMode>
)
