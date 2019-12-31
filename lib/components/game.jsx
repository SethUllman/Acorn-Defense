import React from 'react';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.draw = this.draw.bind(this);
  }

  componentDidMount(){
    const canvas = this.refs.canvas;
    this.x = 10;
    this.y = 10;
    this.dx = 2;
    this.dy = -2;
    this.ctx = canvas.getContext('2d');
    setInterval(this.draw(), 1000);
  }

  draw(){
    debugger;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
    this.x += this.dx;
    this.y += this.dy;
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