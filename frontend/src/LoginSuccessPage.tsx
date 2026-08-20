import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
export default function LoginSuccessPage(){
  const navigate = useNavigate();
  return(
    <div style={{background:'#0B0B12', color:'white', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px', gap:'20px'}}>
      <CheckCircle size={80} color="#B8860B"/>
      <h1 style={{fontSize:'1.8rem', fontWeight:'bold', color:'#B0B0B0', textAlign:'center', margin:0}}>Connexion réussie !</h1>
      <p style={{color:'#888'}}>Bienvenue sur Aladin</p>
      <button onClick={()=>navigate('/profil')} style={{width:'100%', maxWidth:'400px', color:'white', background:'#B8860B', border:'none', padding:'16px', borderRadius:'50px', cursor:'pointer', fontWeight:'bold', fontSize:'16px'}}>VOIR MON PROFIL</button>
    </div>
  )
}
