import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Login() {

    const [showLoginForm, setShowLoginForm] = useState(true)

    return (
        <div>
            <Logo>My Pet's Health</Logo>
            {showLoginForm ? (
                <>
                <LoginForm />
                </>

            ) : (
                <>
                <SignupForm />
                </>
            )}
        </div>
    )
    
}

export default Login;