import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper } from 'lucide-react';

export default function AladinNews(){ 
  return (
    <div style={{background:'#0B0B12', color:'white', minHeight:'100vh', padding:'20px'}}>
      <Link to="/profil" style={{color:'#FFD700', display:'flex', alignItems:'center', gap:'10px', textDecoration:'none'}}>
        <ArrowLeft/> Retour Profil
      </Link>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'80vh', gap:'20px'}}>
        <Newspaper color="#FFD700" size={60}/>
        <h1>ALADIN NEWS</h1>
        <p>Les dernières news</p>
      </div>
    </div>
  )
}
