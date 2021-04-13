import React from 'react';
import { Button } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';

const Photo = (props) => {

  const {photo} = props;


  return (
    <Card>
      <Card.Content className="header">
        <Card.Header>{photo.title}</Card.Header>
      </Card.Content>
      
      <Image src={photo.url}/>
      <Card.Content>
        <span>{photo.description}</span>
      </Card.Content>
      <Button.Group basic attached="bottom">
        {props.children}
      </Button.Group>
    </Card>
  )


}
export default Photo;