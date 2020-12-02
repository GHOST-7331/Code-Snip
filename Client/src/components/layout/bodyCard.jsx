import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const bodyCard = (props) => {
  return (
    <div> 
    <div className='title-container'>
      <h3 className='title'>Save Your Code Snippets</h3>
      </div>
    <div className='container'>
      <div className='row row-6'> 
      <Card className="card-body col-12">
        <div className='btn-container'> 
        <button className='btn1-card'>save</button>
        <button className='btn1-card'>Delete</button>
        </div>
      </Card>
    </div>
    </div>
    </div>
  );
};

export default bodyCard;