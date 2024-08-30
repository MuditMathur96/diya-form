import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import Layout from './components/shared/layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
    <RouterProvider router={router}>

    </RouterProvider>
    </Layout>
    
  </StrictMode>,
)
