import React from 'react';

class Store extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      money: this.props.money,
      health: this.props.health,
      currentSquirrel: null,
      round: this.props.round,
      squirrel: this.props.squirrel
    }
  }

  componentDidMount(){
    this.state.squirrel();
    
  }

  

  render(){
    
    return (
      <div className='store'>
        <div className='status'>
          <div>money: {this.state.money}</div>
          <div>health: {this.state.health}</div>
        </div>
        <div className='squirrels'>
          <div className='basic_squirrel' onClick={() => {
            if (this.state.money >= 100){
              this.setState({ money: [this.state.money - 100], currentSquirrel: 'Basic Squirrel'})
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
    )
  }
}

export default Store;