import * as at from './action_types'

const reducer = (state = [], action) => {
  if(action.type === at.SUCCESS) {
    return action.payload.cities;
  }
  return state;
}

export default reducer;
