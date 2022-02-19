import {Link} from 'react-router-dom';


function NavBar({user, setUser}) {

    function handleLogout(){
        fetch('/api/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }
    return (
        <>
         <h3 id="welcome-nav">Welcome, {user.username}!</h3>

        <h1 className='title'>
            <Link to='/'>Healthy Pets!</Link>
        </h1>
        <nav>
            <button id='logout-button' onClick={handleLogout}>Logout</button>
        </nav>

         <Link  id='new-pet-button' to='/new'>NewPet</Link>
         
        </>
    )

}

export default NavBar;