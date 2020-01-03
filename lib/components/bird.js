// import React from 'react';

//try without using a react component


const bird = (speed) => {
  
  let count = 0;
  const height = window.screen.height;
  const width = window.screen.width;
  let x = (-10);
  let y = (61 * height) / 100;
  const birdWidth = (6 * width) / 100;
  const birdHeight = (7 * height) / 100;
  
  const draw = () => {
    
    if (count < 3000){
      
      const canvas = document.getElementById("Canvas");
      const ctx = canvas.getContext("2d");
      const bird = document.getElementById("blue_bird");
      ctx.clearRect(x-3, y-3, birdWidth+6, birdHeight+5);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(bird, x, y, birdWidth, birdHeight);
     
      if ( y === ((61 * height) / 100) && x < ((9.5 * width) / 100)){
        x += 4;

      } else if (x > ((9.4 * width) / 100) && x < ((19 * width) / 100) && y > ((46 * height) / 100) ){
        y -= 4;

      } else if (y > ((45.9 * height) / 100) && y < (( 47 * height) / 100) && x < ((19.5 * width) / 100)){
        x += 4;

      } else if (x > ((19 * width) / 100) &&  x < (( 20 * width) / 100) && y < (( 76.5 * height) / 100) && y > (( 40 * height) / 100)){ // 46 < y < 76.5
        y += 4;

      } else if (y > (( 76 * height) / 100) && y < (( 77 * height) / 100) && x < (( 34.5 * width) / 100)){
        x += 4;

      } else if (x > (( 34 * width) / 100) && y > (( 53.5 * height) / 100)){
        y -= 4;

      } else if (y < ((54 * height) / 100) && y > (( 32 * height) / 100 ) && x < (( 49.5 * width) / 100)){
        x += 4;

      } else if ( x > (( 49 * width) / 100) && x < (( 50 * width) / 100) && y > (( 31 * height) / 100)){
        y -= 4;

      } else if ( y > (( 30.5 * height) / 100) && x > (( 39.5 * width) / 100)){
        x -= 4;

      } else if ( x < (( 40 * width) / 100) && y > (( 23 * height) / 100)){
        y -= 4;

      } else if ( y < (( 24 * height) / 100) && y > (( 22 * height) / 100) && x > (( 14.5 * width) / 100)){ // 22 < y < 24
        x -= 4;

      } else if ( x < (( 15 * width) / 100) && y < (( 24 * height) / 100) && y > (( 8 * height) / 100)){ // 8 < y < 24
        y -= 4;

      } else if ( y < (( 8.5 * height) / 100) && x < (( 60 * width) / 100)){
        x += 4;
      } else if ( x > ((59 * width) / 100)){
        clearInterval(birdInterval);
        ctx.clearRect(x, y, birdWidth + 1, birdHeight);
      }
      
      count += 1;
    };
  }
  const birdInterval = setInterval(function() {
    draw();
  }, 20);
  
  
  
}

export default bird;