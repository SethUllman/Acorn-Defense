import React from 'react';
import Store from './store';
import squirrel from './squirrel';

const Game = (bird) => {
  const height = window.screen.height;
  const width = window.screen.width;
  let difficulty = 0;
  let money = 500;
  let health = 100;
  let round = 1;
  let hitPoints = 1;
  let value = 10;
  

  return (
    <div className='game'>
      <canvas id="Canvas" className="canvas" width={width} height={height}></canvas>
      <div className='play-area'>
        <div className='play-button' onClick={() => {
          let i = 0;
          if (round % 2 == 0){
            hitPoints += 1;
            value += 5;
          } else {
            difficulty += 5;
          }
          
          const play= setInterval(function(){
          bird(hitPoints, value);
          i += 1;
          if ( i === difficulty){
            clearInterval(play);
          }
          }, 1000);
          round += 1;
        }} >Next Round</div>
        <div className='round_counter'>{round}</div>
      </div>
      <Store money={money} health={health} round={round} squirrel={squirrel}/>
    </div>
  );
  
}

export default Game;