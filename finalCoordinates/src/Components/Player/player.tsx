import { FaRunning } from "react-icons/fa";
import { useEffect, useState } from "react";
import { typeOfGrid } from '../Grid/Grid';

interface PlayerStats{
  health: number,
  moves: number
}

function Player() {
  const [playerStats, setPlayerStats] = useState<PlayerStats>({
    health: 200,
    moves: 450
  });

const [playerMoved, setPlayerMoved] = useState<Boolean>(false);

useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    let player: object = document.getElementsByClassName("player");
    let playerLocation: string = player[0].parentElement.id;
    let currentX: number = Number(playerLocation.split('')[1])
    let currentY: number = Number(playerLocation.split('')[4])
    
    if (event.key === 'ArrowUp') {
      if(playerLocation.includes("y1")){
        alert("You are at the edge of the board");
      } else{
        document.getElementById(`x${currentX} y${currentY - 1}`)?.appendChild(player[0]);
      }
    } else if (event.key === 'ArrowDown') {
        if(playerLocation.includes("y10")){
          alert("You are at the edge of the board");
        } else{
          document.getElementById(`x${currentX} y${currentY + 1}`)?.appendChild(player[0])
        }
    } else if (event.key === 'ArrowLeft') {
      if(playerLocation.includes("x1")){
        alert("You are at the edge of the board");
      } else if(playerLocation.includes("y10")){
        document.getElementById(`x${currentX - 1} y10`)?.appendChild(player[0]);
      } else{
        document.getElementById(`x${currentX - 1} y${currentY}`)?.appendChild(player[0]);
      }
    } else if (event.key === 'ArrowRight') {
      if(playerLocation.includes("x10")){
        alert("You are at the edge of the board");
      } else if(playerLocation.includes("y10")){
        document.getElementById(`x${currentX + 1} y10`)?.appendChild(player[0])
      } else{
        document.getElementById(`x${currentX + 1} y${currentY}`)?.appendChild(player[0])
      }
    }
    setPlayerMoved(!playerMoved);
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [playerMoved]);

useEffect(() => {
  let playerLocation = document.getElementsByClassName("player")[0].parentElement.id;
  let finsihLine = document.getElementsByClassName("finish")[0].parentNode?.id;
  let gridLocation = document.getElementsByClassName("player")[0].parentElement?.className.split(' ')[0];
  let gridTypeModifiers = typeOfGrid.find((grid) => grid.name === gridLocation)?.modifier;
  setPlayerStats({
    health: playerStats.health - gridTypeModifiers.health,
    moves: playerStats.moves - gridTypeModifiers.moves
  })
  if (playerStats.health <= 0){
    alert("You lose");
  }
  else if (playerStats.moves <= 0){
    alert("You lose");
  }
  else if (playerLocation == finsihLine){
    setTimeout(function () { alert("You win"); }, 1);
  }

}, [playerMoved]);

  return (
    <div className="player">
      <FaRunning />
      <div className="health">{playerStats.health}</div>
      <div className="moves">{playerStats.moves}</div>
    </div>
  )
}

export default Player