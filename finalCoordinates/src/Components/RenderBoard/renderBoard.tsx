import './renderBoard.css'
import Grid from '../Grid/grid';
import React, { useEffect } from 'react';
import Player from '../Player/player';
function RenderBoard() {
  
  
  return (
    <>
      <div className="board-container">
        <div className="grid-container">
            <Grid />  
        </div>
        <div className="player-container">
          <Player />
        </div>
        <div className="title">
          <h1>Final Coordinates</h1>
        </div>
        <div className="spaceModifiers">
          <h1><b>Move Space Modifiers</b></h1>
          <div>Blank: Health: 0 Move: -1</div>
          <div>Speeder: Health: 5 Move: 0</div>
          <div>Lava: Health: 50 Move: 10</div>
          <div>Mud: Health: 10 Move: 5</div>
        </div>
        <div className="movementKeys">
          <h1><b>Movement Keys</b></h1>
          <div>Up Arrow</div>
          <div>Down Arrow</div>
          <div>Left Arrow</div>
          <div>Right Arrow</div>
        </div>
      </div>
    </>
  );
}

export default RenderBoard;