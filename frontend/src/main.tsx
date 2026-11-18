import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/urbanist/wght.css'
import 'material-symbols/rounded.css'
import './index.css'

import LandingPage from "./pages/LandingPage/LandingPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
