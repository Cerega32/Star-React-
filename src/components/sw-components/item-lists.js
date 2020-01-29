import React from 'react';
import ImportList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withClildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
							{fn}
						</Wrapped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => <span>{name} ({model})</span>;


const PersonList = withData(withClildFunction(ItemList, renderName), getAllPeople);

const StarshipList = withData(withClildFunction(ItemList, renderNameAndModel), getAllStarships);

const PlanetList = withData(withClildFunction(ItemList, renderName), getAllPlanets);

export {
    PersonList,
    StarshipList,
    PlanetList
}