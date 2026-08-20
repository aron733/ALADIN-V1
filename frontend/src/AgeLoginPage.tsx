import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AgeLoginPage(){
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const handleNext = () => { if(age && parseInt(age) >= 3){ navigate('/numero-login'); } else { alert('Tu dois avoir au moins 13 ans'); } }
  return(
    <div style={{background:'#0B0B12', color:'white', minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px', gap:'20px'}}>
      <h1 style={{fontSize:'1.8rem', fontWeight:'bold', color:'#B0B0B0', textAlign:'center', margin:0}}>Et ton âge ?</h1>
      <input type="number" placeholder="Entre ton âge" value={age} onChange={e=>setAge(e.target.value)} style={{width:'100%', maxWidth:'400px', padding:'16px', borderRadius:'12px', border:'1px solid #2A2A3A', background:'#1A1F2E', color:'white', fontSize:'16px', outline:'none'}}/>
      <button onClick={handleNext} style={{width:'100%', maxWidth:'400px', color:'white', background:'#B8860B', border:'none', padding:'16px', borderRadius:'50px', cursor:'pointer', fontWeight:'bold', fontSize:'16px'}}>SUIVANT</button>
    </div>
  )
}
