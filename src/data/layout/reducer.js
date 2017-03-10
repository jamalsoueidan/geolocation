import * as at from './action_types'

const INIT_STATE = {
  toggle: false
}

const reducer = (state = INIT_STATE, action) => {
  if(action.type === at.UPDATE) {
    return Object.assign({}, state, action.options);
  }
  return state;
}

export default reducer;
