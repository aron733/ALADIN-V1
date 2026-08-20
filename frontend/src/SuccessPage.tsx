import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function SuccessPage(){
  const navigate = useNavigate();
  return(
    <div style={{background:'#0A0F1A', color:'#B0B0B0', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px', gap:'15px'}}>
      <h1 style={{fontSize:'1.6rem', fontWeight:'bold', textAlign:'center', margin:0}}>Inscription réussie !</h1>
      <p style={{color:'#888', margin:0, marginBottom:'10px'}}>Bienvenue sur Aladin Chat</p>
      <button onClick={()=>navigate('/')} style={{width:'100%', maxWidth:'400px', color:'#888', background:'#B8860B', border:'none', padding:'16px', borderRadius:'50px', cursor:'pointer', fontWeight:'bold', fontSize:'16px', marginTop:'10px'}}>SE CONNECTER</button>
    </div>
  )
}
