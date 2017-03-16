import * as at from './action_types'
import { City } from 'models'
const reducer = (state = [], action) => {
  if(action.type === at.SUCCESS) {
    return action.payload.cities.map(c => new City(c));
  }
  return state;
}

export default reducer;
