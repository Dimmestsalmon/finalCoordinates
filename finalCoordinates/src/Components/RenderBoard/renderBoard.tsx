import './renderBoard.css'
import Grid from '../Grid/grid';
import React, { useEffect } from 'react';

function RenderBoard() {
  
  return (
    <>
      <div className="grid-container">
          <Grid />    
      </div>
    </>
  );
}

export default RenderBoard;