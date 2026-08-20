import EmailLoginPage from "./EmailLoginPage"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

// TES PAGES EXISTANTES
import WelcomePage from './WelcomePage'
import AgePage from './AgePage'
import SexePage from './SexePage'
import NumeroPage from './NumeroPage'
import EmailPage from './EmailPage'
import NamePage from './NamePage'
import PrenomPage from './PrenomPage'
import PasswordPage from './PasswordPage'
import SuccessPage from './SuccessPage'
import NameLoginPage from './NameLoginPage'
import PrenomLoginPage from './PrenomLoginPage'
import AgeLoginPage from './AgeLoginPage'
import NumeroLoginPage from './NumeroLoginPage'
import PasswordLoginPage from './PasswordLoginPage'
import LoginSuccessPage from './LoginSuccessPage'
import ProfilPage from './ProfilPage'

// NOUVELLES PAGES MENU
import AladinAI from './AladinAI'
import AladinChat from './AladinChat'
import AladinLibrary from './AladinLibrary'
import AladinLive from './AladinLive'
import AladinNews from './AladinNews'
import Parametres from './Parametres'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* INSCRIPTION */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/age" element={<AgePage />} />
        <Route path="/sexe" element={<SexePage />} />
        <Route path="/numero" element={<NumeroPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/nom" element={<NamePage />} />
        <Route path="/prenom" element={<PrenomPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/success" element={<SuccessPage />} />

        {/* CONNEXION */}
        <Route path="/nom-login" element={<NameLoginPage />} />
        <Route path="/prenom-login" element={<PrenomLoginPage />} />
        <Route path="/age-login" element={<AgeLoginPage />} />
        <Route path="/numero-login" element={<NumeroLoginPage />} />
        <Route path="/password-login" element={<PasswordLoginPage />} />
        <Route path="/login-success" element={<LoginSuccessPage />} />

        {/* APP */}
        <Route path="/profil" element={<ProfilPage />} />
        
        {/* NOUVELLES ROUTES MENU */}
        <Route path="/ai" element={<AladinAI />} />
        <Route path="/chat" element={<AladinChat />} />
        <Route path="/library" element={<AladinLibrary />} />
        <Route path="/live" element={<AladinLive />} />
        <Route path="/news" element={<AladinNews />} />
        <Route path="/parametres" element={<Parametres />} />

      <Route path="/email-login" element={<EmailLoginPage />} />
</Routes>
    </Router>
  </React.StrictMode>,
)
