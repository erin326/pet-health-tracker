import { useState } from 'react';
import {Card, Image, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import HealthLog from './HealthLog';

function PetCard({pet, selectPet, onDeletePet, onUpdatePet }) {

// make an edit form
// update pet on click 

    const {id, name, sex, age, weight} = pet;

    const petImage = pet.pet_image;
    const healthIssue = pet.health_issues
    const type = pet.type_of_pet

    const [showLog, setShowLog] = useState(true)

    // function handlePetUpdate(e) {

    //     const formData = new FormData();
       
    //     formData.append('name', name)
    //     formData.append('age', age)
    //     formData.append('weight', weight)
    //     formData.append('sex', sex)
    //     formData.append('type_of_pet', type)
    //     formData.append('health_issues', healthIssue)
    //     formData.append('pet_image', petImage)
    
    //     fetch(`/api/pets/${id}`, {
    //         method: "PATCH",
     
    //         body: formData
    //         })
    //         .then((r) => r.json())
    //         .then((data) => onUpdatePet(data))
    // }
    // function handleEditClick() {
    //     fetch(`/api/pets/${id}`, {
    //       method: "PATCH",
    //       body: JSON.stringify({
    //         name,
    //         sex,
    //         type_of_pet: type,
    //         age,
    //         weight,
    //         health_issues: healthIssue,
    //         pet_image: petImage
    //       })
    //     })
    //     .then((r) => r.json())
    //     .then((updatedPet) => {
    //         onUpdatePet(updatedPet)
    //     });
    // }

//    function showThisPet(id) {
//        fetch(`/api/pets/${id}`)
//        .then((r) => r.json())
//        .then((pet) => {
//            console.log(pet)
//         //    setShowLog(true)
//        })   
//    }


  

    return( 
        <>
        <Card className='pet-cards'>
            <Card.Content>
                <h2>{name}</h2>
                <Image className='pet-image' src={petImage} alt="my pet"></Image>
                     <Card.Description id="pet-info">    
                    <span>
                    {sex} 
                    </span>
                    <br></br>
                    <span>{type}</span>
                   
                       <span>Age: {age}</span> 
                       <br></br>
                       <span>Weight: {weight} lbs</span>
                       <br></br>
                       <span>Health issues: {healthIssue}</span>
                       <br></br>
                  
                        <button className='pet-button'>
                        <Link onClick={() => selectPet(pet)} to={'/edit/'+ id}>Edit Info</Link>

                        </button>
                           
                       <button className='pet-button' 
                        onClick={() => onDeletePet(id)}
                        >Remove</button>

                        <button
                        className='pet-button'
                        onClick={() => setShowLog(!showLog)}>show/hide log</button>
                        {showLog ? <HealthLog id={id}/> : null}
                        </Card.Description>
                        
                        {/* <HealthLog /> */}
            </Card.Content>
            
        </Card>

      
        </>
    )
}

export default PetCard;