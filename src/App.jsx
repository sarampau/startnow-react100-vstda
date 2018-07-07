import React, { Component } from 'react';
import axios from 'axios';
import Teams from './teams';
import Players from './players';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      players: []
    };

    this.updateTeam = this.updateTeam.bind(this);
  }

  componentWillMount() {
    axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then((res) => {
      axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=')
      .then((r) => {
        this.setState({
          teams: res.data.teams
        });
      });
    });
  }

  updateTeam(teamName) {
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${teamName}`)
      .then((r) => {
        this.setState({
          players: r.data.player
        });
      });
  }


  render() {
    const { teams } = this.state;
    const { players } = this.state;
    
    return (
      <div className='container'>
        <div className='jumbotron' id='jumbo'>
          <h1><center className='title display-1'>Futbolero</center></h1>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Teams
              teams={ teams }
              updateTeam={ this.updateTeam }
            />
          </div>
          <div className='col-md-6'>
            <Players
              players={ players }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
