import React from 'react';
import Store from './store';
import squirrel from './squirrel';
import Bird from './bird.js';
import birdDraw from './birdDraw';

function Game(screenHeight, screenWidth){

  let difficulty = 0;
  let money = 500;
  let health = 100;
  let round = 1;
  let hitPoints = 1;
  let value = 10;
  let birds = [];

  return (
    <div className='game'>
      <canvas id="Canvas" className="canvas" width={screenWidth} height={screenHeight}></canvas>
      <div className='play-area'>
        <div className='play-button' onClick={() => {
          let i = 0;
          if (round % 2 === 0){
            hitPoints += 1;
            value += 5;
          } else {
            difficulty += 5;
          }
          
          const play = setInterval(function(){
          const bird = new Bird(hitPoints, value, screenHeight, screenWidth);
          birds.push(bird);
          i += 1;
          setInterval(function(){
            for(let b = 0; b < i; b++){
              let x = birds[b].x;
              let y = birds[b].y;
              let count = birds[b].count;
              birdDraw(x, y, count);
            }
          })
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