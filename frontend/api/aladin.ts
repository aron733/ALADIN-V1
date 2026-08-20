export default async function handler(req: any, res: any) {
  if (req.method!== 'POST') return res.status(405).json({reply: 'Method not allowed'});
  try {
    const { question } = req.body;
    const API_KEY = process.env.GROQ_API_KEY;
    if(!API_KEY) return res.status(500).json({reply: "ERREUR: La clé GROQ_API_KEY est vide"});

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama-3.1-8b-instant', messages: [{ role: 'user', content: question }] }),
    });
    
    const data = await response.json();
    if(!response.ok) return res.status(500).json({reply: "Erreur Groq: " + JSON.stringify(data)});
    
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({reply: "Erreur: " + error});
  }
}
