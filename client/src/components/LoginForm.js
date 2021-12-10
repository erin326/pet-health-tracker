import { useState } from 'react';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <form>
            <label>Username</label>
            <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            >
            </input>
            <label>Password</label>
            <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
        </form>
        </>
    )
}

export default LoginForm;