import React from 'react'
import {Card} from 'react-bootstrap';
import {Rating} from '@material-ui/lab'

export const MovieCard = ({movie}) => {
  return (
     
        <div>
  <Card style={{ width: '18rem', height:"500px"}}>
  <Card.Img variant="top" src={movie.image} style={{ width:'auto', height:'40%'}} />
  <Card.Body style={{textAlign:"left" ,fontSize:"10px"}}>
    <Card.Title>Title: {movie.name} </Card.Title>
    <Card.Text> Date: {movie.date} </Card.Text>
    <Card.Text>Description: {movie.description} </Card.Text>
    <Card.Text>Type: {movie.type} </Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly/>    
  </Card.Body>
</Card>
        </div>
    )
}
