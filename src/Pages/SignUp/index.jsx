import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container } from './styles'
import polygon from '../../assets/polygon.svg'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      return alert('Fill all the fields')
    }
    if (password.length < 4) {
      return alert('The password must contain at least 4 characters')
    }

    setLoading(true)

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('User successfully registered')
        navigate('/')
        setLoading(false)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Unable to register')
        }
      })
  }

  return (
    <Container>
      <div>
        <img src={polygon} alt="" />
        <h1>food explorer</h1>
      </div>
      <form>
        <h2>Create your Account</h2>

        <Input
          type="text"
          placeholder="type your name"
          label="Name"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          type="email"
          placeholder="type your email"
          label="Email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          type="password"
          placeholder="type your password"
          label="Password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          text={loading ? 'Registering' : 'Create Account'}
          onClick={handleSignUp}
          disabled={loading}
        />
        <Link to="/">I already have an account</Link>
      </form>
    </Container>
  )
}
