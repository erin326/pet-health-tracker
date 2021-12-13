import {Card, Image } from 'semantic-ui-react';


function PetCard({name, age, weight, sex, healthIssue, type, imageUrl }) {

    return(
        <>
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                {/* <Image src={imageUrl}></Image> */}
                <Card.Meta>
                    <span>
                    {sex}
                    </span>
                    <span>{type}</span>
                    
                    </Card.Meta>
                    <Card.Description>
                       <span>Age: {age}</span> 
                       <span>Weight: {weight} lbs</span>
                       <span>Health issues: {healthIssue}</span>
                       
                        </Card.Description>

            </Card.Content>
        </Card>
        </>
    )
}

export default PetCard;