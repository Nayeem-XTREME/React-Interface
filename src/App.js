import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddAppointment from './components/AddAppointment.js';
import ListAppointments from './components/ListAppointments.js'
import Search from './components/SearchAppointments.js'

function App() {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
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

export default App;
