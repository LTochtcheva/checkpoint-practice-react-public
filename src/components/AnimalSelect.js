import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default function AnimalSelect (props) {

//props here are function submitAnimal and array of animals, this function will later set state.selectedAnimal to an animal selected here from this array
//
  return (

    <form >
        <select onChange = {event => props.submitAnimal(event.target.value)}>
          <label>Select an Animal: </label>
            {props.animals.map(function(animal,i) {
               return (
                 <option key={animal}>{animal}</option>
               )
              })
            }
        </select>
    </form>

          )
}

