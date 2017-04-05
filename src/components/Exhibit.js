import React, {Component} from 'react';
import AnimalSelect from './AnimalSelect';
import Cage from './Cage';


export default class Exhibit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAnimal: this.props.selectedAnimal,
    };
    this.setAnimal = this.setAnimal.bind(this);
  }

  setAnimal(animal) {
    console.log('Animal submitted', animal)
    this.setState({selectedAnimal: animal})
  }
  render () {
   // console.log('Props in Exibit ', this.props);
    let animal = this.state.selectedAnimal;
  	return (
	    <div className="exhibit">
        <AnimalSelect animals = {this.props.animals}
           submitAnimal = {this.setAnimal}/>
        <Cage selectedAnimal = {animal}/>
	    </div>
  		)
  }
};
