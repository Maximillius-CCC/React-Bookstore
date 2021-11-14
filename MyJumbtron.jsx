import React from 'react';
import {Card, Button} from 'react-bootstrap';


const MyJumboTron = ()=>(
<Card>
  <Card.Header>Jumbotron</Card.Header>
  <Card.Body>
    <Card.Title>This is the subtitle</Card.Title>
    <Card.Text>
Here is some text for the Jumbotron    
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)

export default MyJumboTron;