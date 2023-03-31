import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './components/component.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}
export default App;
