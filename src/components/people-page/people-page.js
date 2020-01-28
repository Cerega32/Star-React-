import React, { Component } from 'react';


import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  }


  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  

  render() {    
    const itemElement = (
      <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllPeople}
              renderItems={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
    ) 

    const personElement = (
      <PersonDetails personId={this.state.selectedPerson}/>
    )
    return (
      <Row left={itemElement} right={personElement}/>      
    );
  }
};
 