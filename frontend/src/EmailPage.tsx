import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function EmailPage() {
  const [email, setEmail] = useState('')

  return (
    <div style={{minHeight: '100vh', background: '#0B0F1A', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '30px'}}>Ton email</h1>
      <input 
        type="email" 
        placeholder="aladin@gmail.com" 
        onChange={(e) => localStorage.setItem('aladin_email', e.target.value)}
        style={{width: '100%', maxWidth: '400px', padding: '16px', background: '#1F2937', border: '2px solid #374151', borderRadius: '12px', color: 'white', fontSize: '16px', marginBottom: '30px'}}
      />
      <Link 
        to="/password"
        style={{width: '100%', maxWidth: '400px', padding: '16px', background: '#F59E0B', borderRadius: '50px', color: '#0B0F1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', textAlign: 'center'}}
      >
        SUIVANT
      </Link>
    </div>
  )
}
