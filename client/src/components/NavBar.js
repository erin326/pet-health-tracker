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
        <h1>
            <Link to='/'>My Pet's Health</Link>
        </h1>
        <nav>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        <nav>
            <button>
                <Link to='/new'>NewPet</Link>
            </button>
        </nav>
        
        </>
    )

}

export default NavBar