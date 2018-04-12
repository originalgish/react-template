import { SET_YEAR } from '../constants'

const initialState = {
  year: 2016,
  photos: []
}

export default function reducerMain(state = initialState, action) {

  switch (action.type) {
    case SET_YEAR:
      return {...state, year: action.payload }

    default:
      return state;
  }

}
