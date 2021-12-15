import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import PetCard from './PetCard';

function PetList() {

    const [pets, setPets] = useState([]);


    useEffect(() => {
        fetch('/api/pets')
        .then((r) => r.json())
        .then(setPets)

    }, []);


    return (
        <>
        {pets.length > 0 ? (
            pets.map((pet) => (
                <PetCard key={pet.id} id={pet.id} name={pet.name} weight={pet.weight} type={pet.type_of_pet} sex={pet.sex} age={pet.age} petImage={pet.pet_image} healthIssue={pet.health_issues} />
            ))
        ) : (
            <>
            <h2>No Pets Found</h2>
            <button>
                <Link to='/new'> Add a pet
                </Link>
            </button>
            </>
        )}

        </>
    )
}

export default PetList;