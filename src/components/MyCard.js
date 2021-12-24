
import { Card } from 'react-bootstrap';

const MyCard = ({img, desc, ...props}) =>{
    return(
        <Card  style={{ width: '25rem' }} className='card' {...props}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text>
                {desc}
                </Card.Text>
            </Card.Body>
        </Card>
        
    );
}


export default MyCard