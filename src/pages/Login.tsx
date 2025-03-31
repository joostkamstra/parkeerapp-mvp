import { useState } from 'react'
import { supabase } from '../supabase'

function Login() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setMessage('Er ging iets mis.')
    } else {
      setMessage('Check je mail voor de login link.')
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Inloggen</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="jij@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Stuur magic link</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default Login
