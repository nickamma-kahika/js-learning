import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Layout from './components/Layout/Layout'
import store from './store/store.js'
import SignUp from './components/SignUp'
import { Provider } from 'react-redux'
import Dropdown from './components/Dropdown.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />}/>
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<App />}/>
      <Route path='/dropdown' element={<Dropdown/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
  </StrictMode>
)
