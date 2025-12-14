import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const  variable=<h1>Bekzod Toxtamuratov</h1>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {variable}
  </StrictMode>,
)
