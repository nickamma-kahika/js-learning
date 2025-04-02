import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import LoginUser from './components/LoginUser/LoginUser.jsx'

const router = new createBrowserRouter([
  {path:'/' , element: <App />},
  {path:'login', element:<Login />},
  {path:'login/:id', element:<LoginUser />},
  {path:'home', element:<Home />},
])

// const router = new createBrowserRouter(
//   createRoutesFromElements(
//     <Route to='/'>
//       <Route path='' element={<App />}/>
//       <Route path='login' element={<Login />}>
//         <Route path='login/:id' element={<LoginUser />}/>
//       </Route>
//       <Route path='home' element={<Home />}/>
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
