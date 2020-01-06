import React from 'react';
import Game from './lib/components/game';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      splash: true,
      height: window.screen.height,
      width: window.screen.width
    }
  }

  returnSplash(){
    this.setState({splash: true});
  }

  render(){
    
    if(this.state.splash){
      return (
        <div className='splash'>
          <div className='info'>
            <div className='splash-welcome'>Acorn Defense!</div>
            <div className='objective'>Objective:</div>
            <p className='description'>Protect your acorns from the hoards of hungry birds! Choose a squirrel from the store and then click anywhere in the forest to place it. 
              Your squirrels will automatically fire at the birds that are in range. Killing birds gives you more money, but be careful! The birds you fail
              to kill will steal your acorns!
            </p>
            <div className='splash-play' onClick={() => {this.setState({splash:false})}}>Play</div>
          </div>
        </div>
      )
    } else {
      return (
        <Game height={this.state.height} width={this.state.width}/>
      )
    }
  }
};

export default App;
