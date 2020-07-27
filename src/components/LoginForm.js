import React from 'react'

const LoginForm = ({
    handleLogin,
    username,
    password,
    setUsername,
    setPassword
}) => (
    <form onSubmit={handleLogin}>
        <div>
            username
            <input 
            type='text' 
            value={username}
            name='Username'
            onChange = { ({ target }) => setUsername(target.value)}
            ></input>
        </div>
        <div>
            password
            <input
            type='password'
            value={password}
            name='Password'
            onChange= { ({ target }) => setPassword(target.value)}
            >
            </input>
        </div>
        <button type='submit'>Login</button>
    </form>
)

export default LoginForm