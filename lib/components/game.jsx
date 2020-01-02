import React from 'react';

const Game = (birdPath) => {
  
  birdPath()
  return (
    <div className='game'>
      <div className='play-area'>
      </div>
      <div className='side-bar'>Store</div>
    </div>
  );
  
}

export default Game;