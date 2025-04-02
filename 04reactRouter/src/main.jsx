import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' >
    <Route path='' element={<App />} />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
)
