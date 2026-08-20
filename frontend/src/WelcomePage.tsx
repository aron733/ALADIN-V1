export default function WelcomePage() {
  return (
    <div style={{minHeight: '100vh', background: '#0B0F1A', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{fontSize: '120px', marginBottom: '30px'}}>🪔</div>
      <h1 style={{fontSize: '28px', fontWeight: 'bold', color: '#9CA3AF', marginBottom: '12px'}}>Bienvenue sur Aladin Chat</h1>
      <p style={{fontSize: '16px', color: '#D1D5DB', marginBottom: '40px'}}>Connectez-vous ou créez un compte</p>
      <div style={{display: 'flex', gap: '16px', width: '100%', maxWidth: '400px'}}>
        <a href="/nom-login" style={{flex: 1, padding: '16px', background: 'transparent', border: '2px solid #374151', borderRadius: '50px', color: '#F59E0B', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', textAlign: 'center'}}>SIGN IN</a>
        <a href="/nom" style={{flex: 1, padding: '16px', background: '#92400E', borderRadius: '50px', color: 'white', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', textAlign: 'center'}}>SIGN UP</a>
      </div>
    </div>
  )
}
