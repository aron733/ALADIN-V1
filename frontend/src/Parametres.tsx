import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings } from 'lucide-react';

export default function Parametres(){ 
  return (
    <div style={{background:'#0B0B12', color:'white', minHeight:'100vh', padding:'20px'}}>
      <Link to="/profil" style={{color:'#FFD700', display:'flex', alignItems:'center', gap:'10px', textDecoration:'none'}}>
        <ArrowLeft/> Retour Profil
      </Link>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'80vh', gap:'20px'}}>
        <Settings color="#FFD700" size={60}/>
        <h1>PARAMÈTRES</h1>
        <p>Réglages de ton compte</p>
      </div>
    </div>
  )
}
