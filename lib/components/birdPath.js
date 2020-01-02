// import React from 'react';

//try without using a react component


const birdPath = () => {
  debugger;
  const bird = new Image();
  bird.src = '../../assets/sprites/blue_bird/blue_bird.png';
  
  let x = -10;
  let y = 106;
  let count = 0;

  const draw = () => {
    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (count < 550){
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      // this.ctx.drawImage(this.bird, 10, 10);
      ctx.closePath();
      if (count < 43){
        x += 1;
      } else if (count > 42 && count < 68){
        y -= 1;
      } else if (count > 67 && count < 94){
        x += 1;
      } else if (count > 93 && count < 144){
        y += 1;
      } else if (count > 143 && count < 184){
        x += 1;
      } else if (count > 183 && count < 221){
        y -= 1;
      } else if (count > 220 && count < 261){
        x += 1;
      } else if ( count > 260 && count < 299){
        y -= 1;
      } else if ( count > 298 && count < 326){
        x -= 1;
      } else if ( count > 325 && count < 338){
        y -= 1;
      } else if ( count > 337 && count < 404){
        x -= 1;
      } else if ( count > 403 && count < 429){
        y -= 1;
      } else if ( count > 428 && count < 536){
        x += 1;
      }
      
      count += 1;
    };
  }
  setInterval(function() {
    console.log('Interval');
    draw();
  }, 50);
  
  
  
}

export default birdPath;