export default function SexePage() {
  return (
    <div style={{minHeight: '100vh', background: '#0B0F1A', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '30px'}}>Tu es ?</h1>
      <div style={{display: 'flex', gap: '16px', marginBottom: '30px'}}>
        <button style={{padding: '16px 32px', background: '#1F2937', border: '2px solid #374151', borderRadius: '12px', color: 'white', fontSize: '16px'}}>Homme</button>
        <button style={{padding: '16px 32px', background: '#1F2937', border: '2px solid #374151', borderRadius: '12px', color: 'white', fontSize: '16px'}}>Femme</button>
      </div>
      <a href="/numero" style={{width: '100%', maxWidth: '400px', padding: '16px', background: '#F59E0B', borderRadius: '50px', color: '#0B0F1A', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none', textAlign: 'center'}}>SUIVANT</a>
    </div>
  )
}
