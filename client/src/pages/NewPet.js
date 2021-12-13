import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card } from 'semantic-ui-react';

function NewPet({user}) {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     type: '',
    //     sex: '',
    //     age: '',
    //     weight: '',
    //     healthIssues: '',
    //     imageUrl: ''
    // });
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [healthIssue, setHealthIssue] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmitPet(e) {
        e.preventDefault();
        fetch('/api/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                type_of_pet: type,
                sex,
                age,
                weight,
                health_issues: healthIssue,
                image_url: imageUrl
            }),
        }).then((r) => {
            if(r.ok) {
               navigate('/');
            }else {
                r.json().then((error)=> {
                    console.log(error)
                });
            }
        });
    }
    
    const [file, setFile] = useState(null);

    function handleFileChange(e) {
        setFile(e.target.files[0])
    }

    return(
        <>
        <h2>Add a Pet</h2>
        <form onSubmit={handleSubmitPet}>
            <label>Name: </label>
            <input
            type="text"
            id="pet-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></input>
            <label>Type: </label>
            <input
            type="text"
            id="pet-type"
            value={type}
            onChange={(e) => setType( e.target.value)}
            ></input>
              <label>Sex: </label>
            <input
            type="text"
            id="pet-sex"
            value={sex}
            onChange={(e) => setSex( e.target.value)}
            ></input>
              <label>Age: </label>
            <input
            type="text"
            id="pet-age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            ></input>
              <label>Weight: </label>
            <input
            type="text"
            id="pet-weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            ></input>
              <label>Health Issues: </label>
            <input
            type="text"
            id="pet-health-issue"
            value={healthIssue}
            onChange={(e) => setHealthIssue( e.target.value)}
            ></input>
              
            <button type='submit'>Submit</button>
            <p>{errors.map((error) => (
                <li>{error}</li>
            ))}
                </p>
        </form>
        <form onSubmit={submitPhoto}>
        <label>Input Image</label>
            <input
            type="file"
            id="pet-image-input"
            accept={"image/png, image/jpeg"}
            // value="Upload"
            // onChange={handleFileChange}
            ></input>

        </form>
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{age} year old {type} with {healthIssue}. Weighs {weight} lbs. Belongs to {user.username}</Card.Description>
            </Card.Content>
        </Card>

        
        </>
    )
}

export default NewPet;