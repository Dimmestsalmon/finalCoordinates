import './renderBoard.css'
import Grid from '../Grid/grid';
import React, { useEffect } from 'react';
import Player from '../Player/player';
function RenderBoard(playerStats: any) {
  
  
  return (
    <>
      <div className="board-container">
        <div className="grid-container">
            <Grid />  
        </div>
        <div className="player-container">
          <Player />
        </div>
      </div>
    </>
  );
}

export default RenderBoard;