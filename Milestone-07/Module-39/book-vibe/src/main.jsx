import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routers/Routes'
import { RouterProvider } from 'react-router'
import BookProvider from './context/BookContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>
 
<BookProvider>

<RouterProvider router={router}></RouterProvider>
</BookProvider>
  
  
  </StrictMode>
)
