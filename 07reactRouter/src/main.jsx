import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUs/AboutUs.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, {githubLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/' element={<User />}>
        <Route path=':userId' element={<User />} >
        </Route>
      </Route>
      <Route 
      loader={githubLoader}
      path='github' 
      element= {<Github/>}></Route>
      <Route path='*' element= {<h1>Not Found</h1>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
