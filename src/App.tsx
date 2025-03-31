import { useEffect } from 'react'
import { supabase } from './supabase'

function App() {
  useEffect(() => {
    // Simuleer een sessie aanmaken zonder user_id
    const createSession = async () => {
      const { error } = await supabase.from('sessions').insert({
        start_time: new Date().toISOString(),
        location: 'Testlocatie via frontend',
        paid: false,
      })
      if (error) console.error('Fout bij invoegen sessie:', error)
      else console.log('✅ Sessie aangemaakt zonder login')
    }

    createSession()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Parkeerapp MVP</h1>
      <p>Sessie wordt automatisch gestart (zonder login)...</p>
    </div>
  )
}

export default App
