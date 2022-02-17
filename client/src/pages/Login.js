import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Button } from 'semantic-ui-react'

function Login({ onLogin }) {

    const [showLoginForm, setShowLoginForm] = useState(true)

    return (
        <div className='login-page'>
           <h1 className='title'><h2>Healthy Pets</h2></h1>
            {showLoginForm ? (
                <>
                <LoginForm onLogin={onLogin}/>
                <p>Don't have an account? 
                    <Button
                    onClick={() => setShowLoginForm(false)}> Sign Up
                    </Button>
                </p>
                {/* <iframe src="https://giphy.com/embed/uLjx3T8zp2ZWPe3yN5" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bestfriends-cat-workout-weight-lifting-uLjx3T8zp2ZWPe3yN5">via GIPHY</a></p> */}
            
              {/*cat lifting weights */}
              
                {/* <iframe src="https://giphy.com/embed/uLjx3T8zp2ZWPe3yN5" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/bestfriends-cat-workout-weight-lifting-uLjx3T8zp2ZWPe3yN5"></a> */}
           
      
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