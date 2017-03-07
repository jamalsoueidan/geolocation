import { CALL_API } from 'redux-api-middleware';
import * as at from './action_types'

const load = () => {
  return {
    [CALL_API]: {
      endpoint: '/dist/list.json',
      method: 'GET',
      types: [at.REQUEST, at.SUCCESS, at.FAILURE]
    }
  }
}

export { load }
