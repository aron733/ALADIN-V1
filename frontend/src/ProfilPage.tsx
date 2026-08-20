import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageCircle, BookOpen, Radio, Newspaper, Settings, LogOut, Menu, X, User, Mail, Phone, Calendar } from 'lucide-react';

const ProfilPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Données fictives pour l'instant. On branchera au backend après
  const userData = {
    photo: '',
    nom: 'DUPONT',
    prenom: 'Aladin',
    email: 'aladin@example.com',
    numero: '+226 70 00 00 00',
  }

  const menuItems = [
    { name: 'ALADIN AI', icon: <Bot size={20} />, path: '/ai' },
    { name: 'ALADIN CHAT', icon: <MessageCircle size={20} />, path: '/chat' },
    { name: 'ALADIN BIBLIOTHEQUE', icon: <BookOpen size={20} />, path: '/library' },
    { name: 'ALADIN LIVE', icon: <Radio size={20} />, path: '/live' },
    { name: 'ALADIN NEWS', icon: <Newspaper size={20} />, path: '/news' },
    { name: 'PARAMETRES', icon: <Settings size={20} />, path: '/parametres' },
    { name: 'DECONNEXION', icon: <LogOut size={20} />, action: () => navigate('/') },
  ];

  return (
    <div style={{ backgroundColor: '#0B0B12', color: 'white', minHeight: '100vh', width: '100vw', position: 'relative', paddingBottom: '40px' }}>
      
      {/* HAMBURGER */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10 }}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* CONTENU PROFIL */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
        {/* PHOTO */}
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#1A1A24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <User size={50} color='#888' />
        </div>

        <h1 style={{ fontSize: '1.5rem', margin: '0 0 30px 0' }}>INFORMATIONS</h1>
        
        {/* INFOS */}
        <div style={{ width: '90%', maxWidth: '400px' }}>
          <div style={{ background: '#1A1A24', padding: '15px', borderRadius: '12px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#888' }}>NOM</span>
            <span style={{ fontWeight: 'bold' }}>{userData.nom}</span>
          </div>
          <div style={{ background: '#1A1A24', padding: '15px', borderRadius: '12px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#888' }}>PRÉNOM</span>
            <span style={{ fontWeight: 'bold' }}>{userData.prenom}</span>
          </div>
          <div style={{ background: '#1A1A24', padding: '15px', borderRadius: '12px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#888' }}>EMAIL</span>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{userData.email}</span>
          </div>
          <div style={{ background: '#1A1A24', padding: '15px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#888' }}>NUMÉRO</span>
            <span style={{ fontWeight: 'bold' }}>{userData.numero}</span>
          </div>
        </div>
      </div>

      {/* MENU DEROULANT */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '60px', right: '20px', backgroundColor: '#1A1A24', borderRadius: '12px', padding: '10px', width: '250px', zIndex: 9, border: '1px solid #2A2A3A' }}>
          {menuItems.map((item) => (
            <div key={item.name} onClick={() => { setMenuOpen(false); item.action ? item.action() : navigate(item.path!); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', cursor: 'pointer', borderRadius: '8px' }}>
              {item.icon} <span style={{ fontWeight: 500 }}>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProfilPage;
