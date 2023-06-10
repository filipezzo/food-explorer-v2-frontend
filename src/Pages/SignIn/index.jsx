import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import polygon from '../../assets/polygon.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, loading } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <div>
        <img src={polygon} alt="" />
        <h1>food explorer</h1>
      </div>
      <form>
        <h2>Login</h2>

        <Input
          type="email"
          placeholder="type your email"
          label="Email"
          id="email"
          hasBorder
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="type your password"
          label="Password"
          id="password"
          hasBorder
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text={loading ? 'Logging in' : 'Login'}
          onClick={handleSignIn}
          disabled={loading}
        />
        <Link to="/register">Create an Account</Link>
      </form>
    </Container>
  )
}
