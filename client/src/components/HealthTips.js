import { useEffect, useState} from 'react';
import {List, Container} from 'semantic-ui-react';
import HealthTipCard from './HealthTipCard';

function HealthTips() {

    const [healthTips, setHealthTips] = useState([]);
    
    useEffect(() => {
        fetch('/api/health_tips')
        .then((r) => r.json())
        .then((data) => setHealthTips(data))
    },[])
    const tips = healthTips.map((tip) => (
        <HealthTipCard key={tip.id} text={tip.text}>
            </HealthTipCard>
    ))
    const randomTip = tips[Math.floor(Math.random() * tips.length)]

    return (
        <>
        <Container class='body'>
        <h2>Health Tips for Your Furry Friend</h2>
        <h4>
        {randomTip}
        </h4>
        </Container>
      
        </>
    )
}

export default HealthTips;