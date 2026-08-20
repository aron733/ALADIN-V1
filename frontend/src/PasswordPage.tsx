import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function PasswordPage(){
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();
  return(
    <div style={{background:'#0A0F1A', color:'#B0B0B0', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px', gap:'15px'}}>
      <h1 style={{fontSize:'1.6rem', fontWeight:'bold', textAlign:'center', margin:0}}>Crée ton mot de passe</h1>
      <p style={{color:'#888', margin:0, marginBottom:'10px'}}>Dernière étape</p>
      <input type="password" placeholder="Mot de passe" value={pwd} onChange={e=>setPwd(e.target.value)} style={{width:'100%', maxWidth:'400px', padding:'16px', borderRadius:'12px', border:'1px solid #2A2F3A', background:'#131B2B', color:'white', fontSize:'16px', outline:'none'}}/>
      <input type="password" placeholder="Confirmer mot de passe" value={confirm} onChange={e=>setConfirm(e.target.value)} style={{width:'100%', maxWidth:'400px', padding:'16px', borderRadius:'12px', border:'1px solid #2A2F3A', background:'#131B2B', color:'white', fontSize:'16px', outline:'none'}}/>
      <button onClick={()=>navigate('/success')} style={{width:'100%', maxWidth:'400px', color:'#888', background:'#B8860B', border:'none', padding:'16px', borderRadius:'50px', cursor:'pointer', fontWeight:'bold', fontSize:'16px', marginTop:'10px'}}>S'INSCRIRE</button>
    </div>
  )
}
