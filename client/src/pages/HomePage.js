import PetList from '../components/PetList';
import HealthTips from '../components/HealthTips';
import {useEffect} from 'react';


function HomePage({selectPet, pets, setPets, user}) {


    useEffect(() => {
        fetch('/api/pets')
        .then((r) => r.json())
        .then((pets) => setPets(pets))

    }, []);


    return (
        <>
        
        <PetList pets={pets} setPets={setPets} selectPet={selectPet}/>

        
    
        <div id= 'gif-container'>
 
            <iframe title="dog-licking" src="https://giphy.com/embed/1AhgJ8czcvMreU0haV" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

            <iframe title="cats-exercise" src="https://giphy.com/embed/ZQqiFdS5CMcLK" width="480" height="269" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

           
            <iframe title="dog-cat" src="https://giphy.com/embed/jjvIuYHejqi9G" width="480" height="271" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            <a id='gif-link' href="https://giphy.com/gifs/roverdotcom-rover-peanut-butter-gifmedogs-1AhgJ8czcvMreU0haV">via GIPHY</a>
         
        </div>
   

        <HealthTips/>
        </>
    )
}

export default HomePage;