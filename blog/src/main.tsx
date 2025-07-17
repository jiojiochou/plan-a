import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.less'
import 'virtual:uno.css'
import { RouterProvider} from "react-router";
import { router } from './router'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
