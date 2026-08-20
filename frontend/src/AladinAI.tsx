import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Send } from 'lucide-react';

export default function AladinAI(){
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  async function poserQuestion() {
    if(!question.trim()) return;

    const newMessages = [...messages, {role: "user", text: question}];
    setMessages(newMessages);
    setQuestion("");
    setLoading(true);

    try {
      // On appelle notre serveur Vercel au lieu de Groq direct
      const res = await fetch('/api/aladin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ question })
      });

      if(!res.ok) throw new Error('Erreur serveur');
      
      const data = await res.json();
      setMessages([...newMessages, {role: "aladin", text: data.reply}]);

    } catch (e) {
      setMessages([...newMessages, {role: "aladin", text: "Oups, Aladin a un problème de connexion"}]);
    }
    setLoading(false);
  }

  return (
    <div style={{background: '#0B0B12', color:'white', minHeight:'100vh', padding: '20px', display: 'flex', flexDirection: 'column'}}>
      <Link to="/profil" style={{color: '#FFD700', display:'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
        <ArrowLeft/> Retour Profil
      </Link>

      <div style={{display:'flex', flexDirection:'column', alignItems: 'center', marginBottom: '20px'}}>
        <Bot color="#FFD700" size={60}/>
        <h1>ALADIN AI</h1>
        <p>Pose ta question à ALADIN 🧞</p>
      </div>

      <div style={{flex: 1, overflowY: 'auto', marginBottom: '20px'}}>
        {messages.map((m, i) => (
          <div key={i} style={{
            background: m.role === "user"? "#1a1a2e" : "#222",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0",
            textAlign: m.role === "user"? "right" : "left"
          }}>
            <b style={{color: "#FFD700"}}>{m.role === "user"? "Toi" : "Aladin"}</b>: {m.text}
          </div>
        ))}
        {loading && <p style={{color: "#FFD700"}}>Aladin réfléchit...</p>}
      </div>

      <div style={{display: 'flex', gap: '10px'}}>
        <input
          value={question}
          onChange={e => setQuestion(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && poserQuestion()}
          placeholder="Écris ta question..."
          style={{flex: 1, padding: "12px", background: "#1a1a2e", color: "white", border: "1px solid #333", borderRadius: "8px"}}
        />
        <button
          onClick={poserQuestion}
          disabled={loading}
          style={{padding: "12px", background: "#FFD700", color: "black", border: "none", borderRadius: "8px", cursor: 'pointer'}}
        >
          <Send size={18}/>
        </button>
      </div>
    </div>
  )
}
