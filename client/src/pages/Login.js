import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Button } from 'semantic-ui-react'

function Login({ onLogin }) {

    const [showLoginForm, setShowLoginForm] = useState(true)

    return (
        <div className='login-page'>
           <h1 className='title'>Healthy Pets!</h1>
           <p>Welcome to Healthy Pets! Here to provide peace of mind for you and your pet.</p> 
           <p>Login or Sign Up to get started!</p>
           <br></br>

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
                <br></br>
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