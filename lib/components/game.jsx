import React from 'react';
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
      missed: 0,
      currentSquirrel: null,
      squirrels: []
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.play = this.play.bind(this);
    this.shoot = this.shoot.bind(this);
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
        const shootTimer = setInterval(() => {
          this.shoot();
        }, 2000)
        for (let b = 0; b < i; b++) {
          if (this.state.birds[b]) {
            let x = this.state.birds[b].x;
  
            if (x > ((59 * this.props.width) / 100)) {

              let newBirds = this.state.birds;
              newBirds.splice(b, 1);
              this.setState({ missed: [this.state.missed += 1], health: [this.state.health -= this.state.difficulty][0], birds: newBirds });
            
            }
          }
          if (this.state.birds.length === 0) {
            clearInterval(birdStatus);
            clearInterval(shootTimer);
          }
        }
      }, 500);
      if (i === this.state.difficulty) {
        clearInterval(roundStart);
      }
    }, 1000);
  }

  shoot(){
    for(let i = 0; i < this.state.squirrels.length; i++){

      let current = this.state.squirrels[i];
      for(let j = 0; j < this.state.birds.length; j++){

        let bird = this.state.birds[j];
        if(bird.x < current.x + 200 && bird.x > current.x - 200 & bird.y < current.y + 200 && bird.y > current.y - 200){

          let newBirds = this.state.birds;
          newBirds[j].hitpoints -= 1;
          if (newBirds[j].hitpoints === 0){

            
            newBirds.splice(j, 1);
            console.log(this.state.money);
            let newMoney = this.state.money;
            if (Array.isArray(newMoney)){
              newMoney = newMoney[0];
            }
            newMoney += this.state.value;
            
            this.setState({birds: newBirds, money: newMoney});
            

          } else {

            this.setState({birds: newBirds});

          }
        }
        if (i === this.state.squirrels.length + 1 && j === this.state.birds.length + 1){
        
        }
      }
    }
  }

  render(){
    return (
      <div className='game'>
        <canvas id="Canvas" className="canvas" width={this.props.width} height={this.props.height}></canvas>
        <div className='play-area'>
          <div className='play-button' onClick={() => {
            this.handlePlay();
          }} >Next Round</div>
        
        </div>
        <div className='store'>
          <div className='status'>
            <div>money: {this.state.money}</div>
            <div>health: {this.state.health}</div>
          </div>
          <div className='squirrels'>
            <div className='basic_squirrel' onClick={() => {
              if (this.state.money >= 100) {

                const updatedSquirrels = squirrel(this.state.squirrels);
                this.setState({ squirrelCount: ([this.state.squirrelCount++]), money: [this.state.money - 100], currentSquirrel: 'Basic Squirrel', squirrels: updatedSquirrels });
            
              }
            }}>
              <div className='basic_info'>
                <div>Basic Squirrel</div>
                <div className='basic_price'>$100</div>
              </div>
              <div className='basic_squirrel_img'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;