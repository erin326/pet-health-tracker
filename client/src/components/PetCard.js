import { useState } from 'react';
import {Card, Image} from 'semantic-ui-react';
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

    return( 
        <>
        <Card className='pet-cards'>
            <Card.Content>
                <h2>{name}</h2>
                {petImage ? 
                 <Image className='pet-image' src={petImage} alt="my pet"></Image> 
                 : null}
                     <Card.Description id="pet-info">    
                    <span>
                    {sex} 
                    </span>
                    <br></br>
                    <span>{type}</span>
                    <br></br>
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
                        
            </Card.Content>
            
        </Card>

      
        </>
    )
}

export default PetCard;