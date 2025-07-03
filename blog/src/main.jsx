import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import 'virtual:uno.css'
import { router } from './router/index'
import { RouterProvider} from "react-router";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
