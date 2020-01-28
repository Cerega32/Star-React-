import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class App extends Component {

  swapiService = new SwapiService();


  state = {
    showRandomPlanet: true
  }


  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() { 
    
    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />
        <Row left='foo' right='bar2'/>
      </div>
    );
  }
};
 