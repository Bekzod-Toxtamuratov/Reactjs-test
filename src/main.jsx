import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import Student from './pages/Student'
import StudentFunction from './pages/StudentFunction'

const  variable=<h1>Bekzod Toxtamuratov</h1>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Student/>
    <StudentFunction/>
  </StrictMode>,
)
