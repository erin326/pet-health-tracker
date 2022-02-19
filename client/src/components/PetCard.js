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
                <h1>{name}</h1>
                {petImage ? 
                 <Image id='pet-image' src={petImage} alt="my pet"></Image> 
                 : null}
                     <Card.Description id="pet-info">    
                        {type ? <span>Type: {type}</span> : null}
                        <br></br>
                        {sex ? <span> Sex: {sex}</span> : null}
                        <br></br>
                        {age ? <span>Age: {age}</span> : null}
                        <br></br>
                        {weight ? <span>Weight: {weight} lbs</span>: null}
                       <br></br>
                       {healthIssue ? <span>Health issues: {healthIssue}</span> : null}
                       <br></br>
                       <br></br>     
                        </Card.Description>
                  
                        <button style={{'background-color': "transparent", 'border': 'none'}} >
                        <Link  id="edit-button" onClick={() => selectPet(pet)} to={'/edit/'+ id}>Edit Info</Link>

                        </button>
                           
                       <button className="button" 
                        onClick={() => onDeletePet(id)}
                        >Remove</button>

                        <button
                        className="button"
                        onClick={() => setShowLog(!showLog)}>show/hide log</button>

                        <br></br>
                        <br></br>

                        {showLog ? <HealthLog id={id}/> : null}
                   
                        
            </Card.Content>
            
        </Card>

      
        </>
    )
}

export default PetCard;