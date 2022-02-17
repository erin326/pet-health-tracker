import PetList from '../components/PetList';
import HealthTips from '../components/HealthTips';
import {useState, useEffect} from 'react';
import EditPet from '../components/EditPet';

function HomePage({selectPet, selectedPet, setSelectedPet, pets, setPets, user}) {


    useEffect(() => {
        fetch('/api/pets')
        .then((r) => r.json())
        .then(setPets)

    }, []);
    



    return (
        <>
        <h3>Welcome, {user.username}!</h3>
     
        
        <PetList pets={pets} setPets={setPets} selectPet={selectPet}/>

        {/* <iframe src="https://giphy.com/embed/dWfi1Llz4ud1ixRIcW" width="480" height="343" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/PlanetFitness-dWfi1Llz4ud1ixRIcW"></a> */}
    
        <div id= 'gif-container'>
            <iframe src="https://giphy.com/embed/1AhgJ8czcvMreU0haV" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/roverdotcom-rover-peanut-butter-gifmedogs-1AhgJ8czcvMreU0haV"></a>

            <iframe src="https://giphy.com/embed/ZQqiFdS5CMcLK" width="480" height="269" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/exercising-cat-funny-ZQqiFdS5CMcLK"></a>

            {/* <iframe src="https://giphy.com/embed/TA6Fq1irTioFO" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/cat-kitty-pet-TA6Fq1irTioFO"></a> */}
            <iframe src="https://giphy.com/embed/jjvIuYHejqi9G" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/cat-kitten-and-dog-jjvIuYHejqi9G"></a>
        </div>
        {/* <iframe src="https://giphy.com/embed/RQ5i8E7Jir4Y0" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/giphyqa-RQ5i8E7Jir4Y0"></a> */}

        {/* <iframe src="https://giphy.com/embed/3ornk2v68yO67m4Le0" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/dog-eating-bag-of-chips-3ornk2v68yO67m4Le0"></a> */}
              

        {/* <iframe src="https://giphy.com/embed/MW9s5soksSzEreFE9h" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/CBeebiesHQ-gym-yoga-class-MW9s5soksSzEreFE9h"></a> */}
       
    
        {/* <EditPet handlePetChange={handlePetChange} selectedPet={selectedPet} errors={errors}/> */}
        <HealthTips/>
        </>
    )
}

export default HomePage;