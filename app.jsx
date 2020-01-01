import React from 'react';
import Game from './lib/components/game';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      splash: true
    }
  }

  returnSplash(){
    this.setState({splash: true});
  }

  render(){
    if(this.state.splash){
      return (
        <div className='splash'>
          <div className='splash-welcome'>Acorn Defense!</div>
          <div className='splash-play' onClick={() => {this.setState({splash:false})}}>Play</div>
        </div>
      )
    } else {
      return (
        <Game returnSplash={this.returnSplash}/>
      )
    }
  }
};

export default App;
