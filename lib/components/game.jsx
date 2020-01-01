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
    while (count < 400){
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fill();
      // this.ctx.drawImage(this.bird, 10, 10);
      this.ctx.closePath();
      if ( this.y === 106 && this.x < 33){
        this.x += 1;
      } else if (this.x === 33 && this.y > 81){
        this.y -= 1;
      } else if (this.y === 82 && this.x < 60){
        this.x += 1;
      } else if (this.x === 59 && this.y > 41){
        this.y += 1;
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