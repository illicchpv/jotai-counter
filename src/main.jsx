import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppCount} from './AppCount.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AppCount />
  // </StrictMode>,
)
