import {Card, Image } from 'semantic-ui-react';


function PetCard({id, name, age, weight, sex, healthIssue, type, petImage, onDeletePet }) {

// make an edit form
// update pet on click 

 
    return(
        <>
        <Card>
            <Card.Content>
                <h3>{name}</h3>
                <Image className='pet-image' src={petImage} alt="my pet"></Image>
                <Card.Meta>
                    <span>
                    {sex} 
                    </span>
                    <br></br>
                    <span>{type}</span>
                    
                    </Card.Meta>
                    <Card.Description>
                       <span>Age: {age}</span> 
                       <br></br>
                       <span>Weight: {weight} lbs</span>
                       <br></br>
                       <span>Health issues: {healthIssue}</span>
                       <br></br>
                       <span><button id='delete-pet' 
                onClick={() => onDeletePet(id)}
                
                >Delete</button>
                </span>
                        </Card.Description>

            </Card.Content>
        </Card>
        </>
    )
}

export default PetCard;