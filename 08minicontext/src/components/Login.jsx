import React, { useContext, useState } from 'react'
import Context from '../Context/Context'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
   <div>
    <h2>Login</h2>
    <input
    type="text"
    onChange={(e) => {setUsername(e.target.value)}}
    placeholder="Username"
    value={username}
    />
    {" "}
    <input
    type="password"
    onChange={(e) => {setPassword(e.target.value)}}
    placeholder="Password"
    value={password}
    />
    {" "}
    <button
    onClick={handleSubmit}
    > Submit
      </button>
    
   </div>
  )
}

export default Login