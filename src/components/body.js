import React from 'react';
import { Container, Row,Card } from 'react-bootstrap';
import './body.css'

function Body(){
  return(
  <div className='body '>
  <Container fluid >
   <Row className=" position-fixed justify-content">
    
      <Card gap={3} className='col-md-4 g-2 text-dark ' >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='text-dark g-2' style={{  width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  </Container>
  </div>
  );
}

export default Body;

  
