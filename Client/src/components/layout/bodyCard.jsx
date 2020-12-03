import React from 'react';
import { Card } from 'reactstrap';
import addForm from './addForm';




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
        <button  className='btn1-card'>Add</button>
        <button className='btn1-card'>Save</button>
        </div>
        <div className='inner-card-container'>  
        <Card className="inner-card-body">
      </Card>
      </div>
      </Card>
    </div>
    </div>
    </div>
  );
};

export default bodyCard;