import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import Whatsapp from './Applets/whatsapp.jsx'

const router = createBrowserRouter([
  {path:"/",element: <App/>},
  {path:"/whatsapp",element: <Whatsapp/>},
  
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  ,
)
