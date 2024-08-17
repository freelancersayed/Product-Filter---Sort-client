import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Layout/Router.jsx'
import Authprovider from './firebase/provider/Authprovider.jsx'
import { Helmet } from 'react-helmet'



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </StrictMode>,
)
