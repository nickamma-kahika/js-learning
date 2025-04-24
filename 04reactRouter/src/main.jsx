import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import Work from './components/Work/Work.jsx';
import About , { githubInfo} from './components/About/About.jsx';
import UserContextProvider from './context/UserContextProvider.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route path='/home' element = {<Home />}/>
    <Route path='/projects' element = {<Projects />}/>
    <Route path='/work' element = {<Work />}/>
    <Route
     loader={ githubInfo }
     path='/me' 
     element = {<About />}
     />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>

  </>
)
