import { useState } from 'react'

function App() {
  const [isParking, setIsParking] = useState(false)
  const [startTime, setStartTime] = useState<Date | null>(null)

  const startSession = () => {
    const now = new Date()
    setStartTime(now)
    setIsParking(true)
    localStorage.setItem('parking_session', JSON.stringify({ startTime: now }))
  }

  const stopSession = () => {
    const session = localStorage.getItem('parking_session')
    if (session) {
      const data = JSON.parse(session)
      const endTime = new Date()
      console.log('Sessie info:', {
        start: data.startTime,
        end: endTime.toISOString(),
      })
      // hier later: versturen naar Supabase
      localStorage.removeItem('parking_session')
    }
    setIsParking(false)
    setStartTime(null)
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Parkeerapp MVP</h1>
      {isParking ? (
        <>
          <p>Sessie gestart om: {startTime?.toLocaleTimeString()}</p>
          <button onClick={stopSession}>Stop sessie</button>
        </>
      ) : (
        <button onClick={startSession}>Start parkeersessie</button>
      )}
    </div>
  )
}

export default App
