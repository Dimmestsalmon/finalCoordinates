import './renderBoard.css'
import Grid from '../Grid/grid';
import React, { useEffect } from 'react';
import Player, {playerStats} from '../Player/player';

function RenderBoard() {
  const [resetGame, setResetGame] = React.useState(false);

  const Restart: any = () => {
    setResetGame(!resetGame);
  }
  return (
    <>
      <button onClick={Restart}>Restart</button>
      <div className="grid-container">
          <Grid />    
      </div>
      
    </>
  );
}

export default RenderBoard;