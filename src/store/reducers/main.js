

// make sure you understand the parameters here!
	// with any reducer we expect 2 arguments
	// we are able to give a default value to a parameter in the way seen below
const mammals = ['Tiger', 'Panda', 'Pig'];
const birds = ['Eagle', 'Flamingo', 'Penguin'];
const fish = [ 'Seahorse', 'Octopus', 'Stingray'];

const initialState = {
        selectedMammal : "Tiger",
        selectedBird : "Eagle",
        selectedFish : "Seahorse",
        mammals,
        birds,
        fish
        }

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) {

    case 'SET_MAMMAL':
      newState.selectedMammal = action.animal;
      break;

    case 'SET_BIRD':
      newState.selectedBird = action.animal;
      break;

    case 'SET_FISH':
      newState.selectedFish = action.animal;
      break;

    default:
    return state;
  }
  return newState;
};
