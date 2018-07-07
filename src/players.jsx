import React, { Component } from 'react';

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSelect: ''
    };

    this.editPlayer = this.editPlayer.bind(this);
  }

  editPlayer(e) {
    const id = e.target.value;
    const index = this.props.players.findIndex(player => {
      if (id == player.strPlayer) {
        return true;
      }
    });
    this.setState({
      playerSelect: this.props.players[index],
      playerValue: e.target.value
    });
  }

  render() {
    const { players } = this.props;

    return (
      <div className='card cards'>
        <div className='card-header'>
          <h2 className='fonts ml-3'>Players</h2>
        </div>
        <div className='card-body'>
          <select className='form-control' onChange={ this.editPlayer } value={ this.state.playerSelect }>
            <option value=''>Choose a player</option>
            { players.map((player) => {
              return (<option value={ player.strPlayer }>{ player.strPlayer } ({ player.strPosition })</option>);
            }) }
          </select>
        </div>
        <div className='card-footer'>
          <div className='container'>
            <div className='row'>
              { this.state.playerSelect !== '' && <h1 className='fonts'>{ this.state.playerSelect.strPlayer }</h1> }
              { this.state.playerSelect !== '' && <img src={ this.state.playerSelect.strCutout } width='60' height='60' className='ml-4' /> }
            </div>
            <div className='fonts mt-2 mb-2'>{ this.state.playerSelect.strDescriptionEN }</div>
            <div className='row ml-1'>
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Position:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.playerSelect.strPosition }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Nationality:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.playerSelect.strNationality }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Date born:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.playerSelect.dateBorn }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Height:</h4> }
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-light'>{ this.state.playerSelect.strHeight } m</h4> }
            </div>
            <div className='row ml-1'>
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Weight:</h4> }
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-light'>{ this.state.playerSelect.strWeight } kg</h4> }
            </div>
            <div className='row ml-1'>
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Date signed:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.playerSelect.dateSigned }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.playerSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Signing amount:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.playerSelect.strSigning }</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
