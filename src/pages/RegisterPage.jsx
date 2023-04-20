import React from 'react'
import { useState } from 'react'

const RegisterPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const register = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" }
        })
        if (response.status == 200) {
            alert("Registration Sucessful")
        } else {
            alert("Registration Failed")
        }
    }
    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
    )
}

export default RegisterPage