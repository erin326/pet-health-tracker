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
         <h3>Welcome, {user.username}!</h3>
        <h1 className='title'>
            <Link to='/'>Healthy Pets!</Link>
        </h1>
        <nav>
            <button id='logout-button' onClick={handleLogout}>Logout</button>
        </nav>
        <nav>
            <button id='new-pet-button'>
                <Link to='/new'>NewPet</Link>
            </button>
        </nav>
        
        </>
    )

}

export default NavBar