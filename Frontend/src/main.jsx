import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Carousel, About, PropertyListing } from './pages/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index: true,
        element: <Carousel />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "residential",
        element: <PropertyListing />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
