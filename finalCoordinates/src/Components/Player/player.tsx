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
    let player: HTMLCollection= document.getElementsByClassName("player");
    let playerLocation: string = player[0].parentElement.id;
    let currentX: number = Number(playerLocation.split(' ')[0].slice(1));
    let currentY: number = Number(playerLocation.split(' ')[1].slice(1));
    const topCheck: RegExp = /\by1$/;
    const bottomCheck: RegExp = /\by100$/;
    const leftCheck: RegExp = /\bx1\b/;
    const rightCheck: RegExp = /\bx100/;
    
    if (event.key === 'ArrowUp') {
      if(playerLocation.match(topCheck)){
        alert("You are at the edge of the board");
      } else{
        document.getElementById(`x${currentX} y${currentY - 1}`)?.appendChild(player[0]);
      }
    } else if (event.key === 'ArrowDown') {
      if(playerLocation.match(bottomCheck)){
          alert("You are at the edge of the board");
        } else{
          document.getElementById(`x${currentX} y${currentY + 1}`)?.appendChild(player[0])
        }
    } else if (event.key === 'ArrowLeft') {
      if(playerLocation.match(leftCheck)){
        alert("You are at the edge of the board");
      } else if(playerLocation.match(bottomCheck)){
        document.getElementById(`x${currentX - 1} y100`)?.appendChild(player[0]);
      } else{
        document.getElementById(`x${currentX - 1} y${currentY}`)?.appendChild(player[0]);
      }
    } else if (event.key === 'ArrowRight') {
      if(playerLocation.match(rightCheck)){
        alert("You are at the edge of the board");
      } else if(playerLocation.match(bottomCheck)){
        document.getElementById(`x${currentX + 1} y100`)?.appendChild(player[0])
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
    <div>
      <div>Health: {playerStats.health} Moves: {playerStats.moves}</div>
    </div>
  )
}

export default Player