import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, MessageCircle, BookOpen, Radio, Newspaper, Settings, LogOut, Menu, X } from 'lucide-react';

const ProfilPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'ALADIN AI', icon: <Bot size={20} />, path: '/ai' },
    { name: 'ALADIN CHAT', icon: <MessageCircle size={20} />, path: '/chat' },
    { name: 'ALADIN BIBLIOTHÈQUE', icon: <BookOpen size={20} />, path: '/library' },
    { name: 'ALADIN LIVE', icon: <Radio size={20} />, path: '/live' },
    { name: 'ALADIN NEWS', icon: <Newspaper size={20} />, path: '/news' },
    { name: 'PARAMÈTRES', icon: <Settings size={20} />, path: '/parametres' },
    { name: 'DÉCONNEXION', icon: <LogOut size={20} />, action: () => navigate('/') },
  ];

  return (
    <div style={{ backgroundColor: '#0B0B12', color: 'white', height: '100vh', width: '100vw', position: 'relative', overflow: 'hidden' }}>
      
      {/* HAMBURGER EN HAUT DROITE */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10 }}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* TITRE AU MILIEU HAUT */}
      <h1 style={{ position: 'absolute', top: '15%', width: '100%', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>
        WELCOME TO ALADIN 🧞
      </h1>

      {/* MENU DEROULANT */}
      {menuOpen && (
        <div style={{ 
          position: 'absolute', 
          top: '60px', 
          right: '20px', 
          backgroundColor: '#1A1A24', 
          borderRadius: '12px', 
          padding: '10px', 
          width: '250px',
          zIndex: 9,
          border: '1px solid #2A2A3A'
        }}>
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                setMenuOpen(false);
                if (item.action) {
                  item.action();
                } else {
                  navigate(item.path!);
                }
              }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '12px', 
                cursor: 'pointer', 
                borderRadius: '8px',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2A2A3A'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {item.icon} <span style={{ fontWeight: 500 }}>{item.name}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default ProfilPage;
