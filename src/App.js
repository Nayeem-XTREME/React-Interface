import React, { Component } from 'react';
import './App.css';

import AddAppointment from './components/AddAppointment.js';
import ListAppointments from './components/ListAppointments.js'
import Search from './components/SearchAppointments.js'

class App extends Component {

  constructor() {
    super();

    this.state = {
      myName: "Nayeem",
      myAppointments: []
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          return item;
        });

        this.setState({myAppointments: apts});
      });

  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {this.state.myName}
                <AddAppointment></AddAppointment>
                <Search></Search>
                <ListAppointments></ListAppointments>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;