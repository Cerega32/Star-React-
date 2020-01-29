import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails  from '../item-details';
import { Record } from '../item-details/item-details';

import {
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
  PersonList,
  StarshipList,
  PlanetList
} from '../sw-components';


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
    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets
          } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11}
      getData={getPerson}
      getImageUrl={getPersonImage}>
        <Record field='gender' label='Gender:'/>
        <Record field='eyeColor' label='Eye Color:'/>
      </ItemDetails>
    )

    const starshipsDetails = (
      <ItemDetails itemId={5}
      getData={getStarship}
      getImageUrl={getStarshipImage} >
        <Record field='model' label='Model:'/>
        <Record field='length' label='Length:'/>
        <Record field='crew' label='Crew:'/>
      </ItemDetails>
    
    )
    
    return (
      <div>
        <Header />
        <RandomPlanet />
        <Row 
          left={
            <PersonList>
             { ({name}) => <span>{name}</span> }
            </PersonList>
          }
          right={
            <PersonDetails itemId='5' />
          }
        />
        <PersonList />
        <StarshipList />
        <PlanetList />

      </div>
    );
  }
};
 