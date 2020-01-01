import React from 'react';
import bla from '../../'


class Game extends React.Component{
  constructor(props){
    super(props);
    this.draw = this.draw.bind(this);
  }

  componentDidMount(){
    debugger;
    this.bird = new Image();
    this.bird.src = '../../assets/sprites/blue_bird/blue_bird.png';
    
    const canvas = this.refs.canvas;
    this.x = -10;
    this.y = 106;
    this.dx = 1;
    this.dy = 1;
    this.ctx = canvas.getContext('2d');
    setInterval(this.draw(), 1000);
    
  }

  draw(){
    let count = 0;
    while (count < 550){
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fill();
      // this.ctx.drawImage(this.bird, 10, 10);
      this.ctx.closePath();
      if (count < 43){
        this.x += 1;
      } else if (count > 42 && count < 68){
        this.y -= 1;
      } else if (count > 67 && count < 94){
        this.x += 1;
      } else if (count > 93 && count < 144){
        this.y += 1;
      } else if (count > 143 && count < 184){
        this.x += 1;
      } else if (count > 183 && count < 221){
        this.y -= 1;
      } else if (count > 220 && count < 261){
        this.x += 1;
      } else if ( count > 260 && count < 299){
        this.y -= 1;
      } else if ( count > 298 && count < 326){
        this.x -= 1;
      } else if ( count > 325 && count < 338){
        this.y -= 1;
      } else if ( count > 337 && count < 404){
        this.x -= 1;
      } else if ( count > 403 && count < 429){
        this.y -= 1;
      } else if ( count > 428 && count < 536){
        this.x += 1;
      }
      
      count += 1;
    };
  }

  render(){
    return(
    <div className='game'>
      <div className='play-area'>
        <canvas id="mycanvas" ref='canvas' className='canvas'></canvas>
      </div>
      <div className='side-bar'>Store</div>
    </div>
    )}
}

export default Game;