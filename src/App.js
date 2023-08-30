import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './components/component.css';
import './components/estrelas.css';
import Estrelas from './components/Estrelas';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Estrelas />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}
export default App;
