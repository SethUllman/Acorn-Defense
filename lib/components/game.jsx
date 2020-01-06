import React from 'react';
import Store from './store';
import squirrel from './squirrel';
import Bird from './bird.js';
import birdDraw from './birdDraw';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      difficulty: 0,
      money: 500,
      health: 100,
      round: 1,
      hitPoints: 1,
      value: 10,
      alive: true,
      birds: [],
      missed: 0
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.play = this.play.bind(this);
  }

  handlePlay(){
    
    this.setState({birds: []});
    if (this.state.round % 2 === 0) {
      this.setState({hitPoints: [this.state.hitPoints += 5], value: [this.state.value == 5]});
    } else {
      this.setState({difficulty: this.state.difficulty += 5})
    }

    this.play();
      
    this.setState({round: [this.state.round += 1]});
  }

  play(){
    let i = 0;
    const roundStart = setInterval(() => {

      const bird = new Bird(this.state.hitPoints, this.state.value, this.props.width, this.props.height, this.state.alive);
      let newBirds = this.state.birds.concat(bird);
      this.setState({ birds: newBirds});
      i += 1;
      
      const birdStatus = setInterval(() => {
        for (let b = 0; b < i; b++) {
          if (this.state.birds[b]) {
            let x = this.state.birds[b].x;
  
            if (x > ((59 * this.props.width) / 100)) {

              
              let newBirds = this.state.birds;
              newBirds.splice(b, 1);
              
              this.setState({ missed: [this.state.missed += 1], health: [this.state.health -= this.state.difficulty][0], birds: newBirds });
              

              // debugger;
            
            }
          }
          if (this.state.birds.length === 0) {
            clearInterval(birdStatus);
          }
        }
      }, 500);
      if (i === this.state.difficulty) {
        clearInterval(roundStart);
      }
    }, 1000);
  }

  render(){
    return (
      <div className='game'>
        <canvas id="Canvas" className="canvas" width={this.props.width} height={this.props.height}></canvas>
        <div className='play-area'>
          <div className='play-button' onClick={() => {
            // debugger;
            this.handlePlay();
          }} >Next Round</div>
        
        </div>
        {/* {console.log(this.state.health)} */}
        <Store money={this.state.money} health={this.state.health} round={this.state.round} squirrel={squirrel}/>
      </div>
    );
  }
}

export default Game;