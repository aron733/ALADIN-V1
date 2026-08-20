import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageCircle, BookOpen, Radio, Newspaper, Settings, LogOut, Menu, X, User } from 'lucide-react';

const ProfilPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    <div style={{ backgroundColor: '#0B0B12', color: 'white', height: '100vh', width: '100vw', position: 'relative' }}>
      
      {/* HAMBURGER */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10 }}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* CONTENU PROFIL */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
        <User size={80} style={{ background: '#1A1A24', padding: '20px', borderRadius: '50%' }} />
        <h1 style={{ fontSize: '1.8rem', margin: '20px 0 5px 0' }}>Bienvenue</h1>
        <p style={{ color: '#888', fontSize: '1rem' }}>ton-email@example.com</p>
        
        <div style={{ marginTop: '40px', width: '90%', maxWidth: '400px' }}>
          <div style={{ background: '#1A1A24', padding: '15px', borderRadius: '12px', marginBottom: '10px' }}>Mes Statistiques</div>
          <div style={{ background: '#1A1A24', padding: '15px', borderRadius: '12px', marginBottom: '10px' }}>Historique</div>
          <div style={{ background: '#1A1A24', padding: '15px', borderRadius: '12px' }}>Abonnement</div>
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
