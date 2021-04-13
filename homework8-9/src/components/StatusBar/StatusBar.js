import React from 'react';
import { Segment } from 'semantic-ui-react';



const StatusBar = (props) => (
  <Segment >
    <Segment basic>
      {props.title}
    </Segment>
    <Segment basic>
      {props.children}
    </Segment>
  </Segment>
)
export default StatusBar;

