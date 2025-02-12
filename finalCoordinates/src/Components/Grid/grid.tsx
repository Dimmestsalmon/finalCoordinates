import { useEffect } from 'react';
import Finish from '../Finish/finish';
import Player from '../Player/player';
import './grid.css'

interface GridTypeModifiers{
  health: number,
  moves: number
}

interface GridType {
name: string,
modifier: GridTypeModifiers
} 
export const typeOfGrid: GridType[] = 
[
  {name: "blank", modifier: {health: 0, moves: 1}},
  {name: "speeder", modifier: {health: 5, moves: 0}},
  {name: "lava", modifier: {health: 50, moves: 10}},
  {name: "mud", modifier: {health: 10, moves: 5}}
]

function Grid() {

  let grids: Element[] = [];
  let start: number = Math.floor(Math.random()*10)+1;
  let finish: number = Math.floor(Math.random()*10)+91;
  let playerSet: boolean = true;
  let finishSet: boolean = true;
  let x: number = 1;
  let y:number = 1;
  let player = <div className="player"></div>;


  
  const gridMaker = () => {
    for(let i=1; i<=100; i++){
      let type=Math.floor(Math.random()*4);
      let gridClass = typeOfGrid[type].name;
      if (playerSet && i == start){
        grids.push(<div className={`blank grid`} id ={`x${x} y${y}`} key={i}>{player}</div>)
        playerSet = false;
      }
      else if (finishSet && i == finish){
        grids.push(<div className={`blank grid`} id ={`x${x} y${y}`} key={i}><Finish /></div>)
        finishSet = false;
      }
      else{
        grids.push(<div className={`${gridClass} grid`} id ={`x${x} y${y}`} key={i}></div>)
      }
      if (y == 10){
        y = 0;
        x++;
      }
      y++;
    }
    return grids
  }

  return (
      <>      
        {gridMaker()}
      </>
  );
}

export default Grid;