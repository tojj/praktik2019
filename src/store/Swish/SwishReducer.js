import initialState from '../initialState'
import {

  UPDATE_SWISH

} from './SwishActions'


export default function (state = initialState.swish, action) {
  switch (action.type) {

    case UPDATE_SWISH:
      return { ...state, swishMoney: action.data } 

    default: 
      return state

  }

}
