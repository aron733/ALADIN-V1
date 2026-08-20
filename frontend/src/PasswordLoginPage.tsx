import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function PasswordLoginPage(){
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
  return(
    <div style={{background:'#0B0B12', color:'white', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px', gap:'20px'}}>
      <h1 style={{fontSize:'1.8rem', fontWeight:'bold', color:'#B0B0B0', textAlign:'center', margin:0}}>Et ton mot de passe ?</h1>
      <input type="password" placeholder="Entre ton mot de passe" value={pwd} onChange={e=>setPwd(e.target.value)} style={{width:'100%', maxWidth:'400px', padding:'16px', borderRadius:'12px', border:'1px solid #2A2A3A', background:'#1A1F2E', color:'white', fontSize:'16px', outline:'none'}}/>
      <button onClick={()=>navigate('/login-success')} style={{width:'100%', maxWidth:'400px', color:'white', background:'#B8860B', border:'none', padding:'16px', borderRadius:'50px', cursor:'pointer', fontWeight:'bold', fontSize:'16px'}}>SUIVANT</button>
    </div>
  )
}
