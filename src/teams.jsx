import React, { Component } from 'react';

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamSelect: '',
    };

    this.editTeam = this.editTeam.bind(this);
  }

  editTeam(e) {
    const id = e.target.value;
    const index = this.props.teams.findIndex(team => {
      if (id == team.strTeam) {
        return true;
      }
    });
    this.setState({
      teamSelect: this.props.teams[index]
    });
    this.props.updateTeam(e.target.value);
  }

  render() {
    const { teams } = this.props;
    const link = `http://${this.state.teamSelect.strWebsite}`;

    return (
      <div className='card cards'>
        <div className='card-header'>
          <h2 className='fonts ml-3'>Clubs</h2>
        </div>
        <div className='card-body'>
          <select className='form-control' onChange={ this.editTeam }>
            <option value='' defaultValue>Choose a club</option>
            { teams.map((team) => {
              return (<option value={ team.strTeam }>{ team.strTeam }</option>);
            }) }
          </select>
        </div>
        <div className='card-footer'>
          <div className='container'>
            <div className='row'>
              { this.state.teamSelect !== '' && <h1 className='fonts'>{ this.state.teamSelect.strTeam }</h1> }
              { this.state.teamSelect !== '' && <img src={ this.state.teamSelect.strTeamBadge } width='60' height='60' className='ml-4' /> }
            </div>
            <div className='fonts mt-2 mb-2'>{ this.state.teamSelect.strDescriptionEN }</div>
            <div className='row ml-1'>
              { this.state.teamSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Manager:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.teamSelect.strManager }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.teamSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Stadium:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.teamSelect.strStadium }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.teamSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Location:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.teamSelect.strStadiumLocation }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.teamSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Year formed:</h4> }
              <h4 className='fonts font-weight-light'>{ this.state.teamSelect.intFormedYear }</h4>
            </div>
            <div className='row ml-1'>
              { this.state.teamSelect !== '' && <h4 className='fonts font-weight-bold mr-2'>Website:</h4> }
              <h4 className='fonts font-weight-light'><a href={ link } target='_blank'>{ this.state.teamSelect.strWebsite }</a></h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
