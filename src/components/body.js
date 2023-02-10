import React from 'react';
import { Container, Row,Card,Stack } from 'react-bootstrap';
import './body.css'
import ListeDeMusique from './listeMusique'; 
import {Inscription} from'./Inscription';
function Body(){
  return(
  <div  className='body '>
   <Stack direction='horizontal' gap={3}>
   
    <Card  className='col-md-4 g-2 text-dark gx-2' >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
           <Inscription></Inscription>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className='col-md-4 g-2 text-dark gx-2' >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <ListeDeMusique></ListeDeMusique>
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
      
      </Stack> 
      <Stack  gap={3}>
   
   <Card  className='col-md-4 g-2 text-dark gx-2' >
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
     
     </Stack> 
     <Stack  gap={3}>
   
   <Card  className='col-md-4 g-2 text-dark gx-2' >
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
     
     </Stack> 

     <Stack  gap={3}>
   
   <Card  className='col-md-4 g-2 text-dark gx-2' >
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
     
     </Stack> 

     <Stack  gap={3}>
   
   <Card  className='col-md-4 g-2 text-dark gx-2' >
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
     <Stack  gap={3}>
   
   <Card  className='col-md-4 g-2 text-dark gx-2' >
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
     
     </Stack> 

  
     </Stack> 



  </div>




  );
}

export default Body;

  
