import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  )
}

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.updateDetails();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({loading: true})
      this.updateDetails();
    }
  }

  updateDetails() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({ 
          item,
          image: getImageUrl(item)
        });
      })
  }

  render() {

    const { item, image } = this.state;

    if (!item) {
      return (<span>Select a person from a list</span>) 
    }
    const { name } = item;

    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt="character"/>  
        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    )


  
  }
}
