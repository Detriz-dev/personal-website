import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/urbanist/wght.css'
import '@fontsource-variable/urbanist/wght-italic.css'
import 'material-symbols/rounded.css'
import './index.css'

import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
