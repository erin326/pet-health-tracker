import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Button } from 'semantic-ui-react'

function Login({ onLogin }) {

    const [showLoginForm, setShowLoginForm] = useState(true)

    return (
        <div>
            <h1>My Pet's Health</h1>
            {showLoginForm ? (
                <>
                <LoginForm onLogin={onLogin}/>
                <p>Don't have an account? 
                    <Button
                    onClick={() => setShowLoginForm(false)}> Sign Up
                    </Button>
                </p>
                </>

            ) : (
                <>
                <SignupForm onLogin={onLogin}/>
                <p>
                    Already have an account? 
                    <Button onClick={() => setShowLoginForm(true)}>
                        Log In
                    </Button>
                </p>
                </>
            )}
        </div>
    )
    
}



export default Login;