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
  let alive = true;
  let birds = [];
  let missed = 0;
  const width = window.screen.width;

  function handlePlay(){
    let i = 0;
    birds = [];
    if (round % 2 === 0) {
      hitPoints += 1;
      value += 5;
    } else {
      difficulty += 5;
    }

    const play = setInterval(function () {
      const bird = new Bird(hitPoints, value, screenHeight, screenWidth, alive);
      birds.push(bird);
      i += 1;
      const birdStatus = setInterval(function () {
        for (let b = 0; b < i; b++) {
          if (birds[b]){
          let x = birds[b].x;
            if (x > ((59 * width) / 100)) {
              missed += 1;
              birds.splice(b, 1);
              health -= difficulty;
              console.log(health);
            }
          }
          if (birds.length === 0){
            clearInterval(birdStatus);
          }
        }
      }, 500);
      if (i === difficulty) {
        clearInterval(play);
      }
    }, 1000);
    round += 1;
  }

  return (
    <div className='game'>
      <canvas id="Canvas" className="canvas" width={screenWidth} height={screenHeight}></canvas>
      <div className='play-area'>
        <div className='play-button' onClick={() => {
          handlePlay();
        }} >Next Round</div>
       
      </div>
      <Store money={money} health={health} round={round} squirrel={squirrel}/>
    </div>
  );
  
}

export default Game;