import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Templatepage from './pages/Templatepage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}/>
      <Route path="template" element={<Templatepage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
