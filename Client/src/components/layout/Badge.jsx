import React from 'react';
import { Badge } from 'reactstrap';

const badge = (props) => {
  return (
    <div className='navbar-container'>
      <h3 className='badge-header'>Code <Badge className="badge">Snip</Badge></h3>
    </div>
  );
}

export default badge;
