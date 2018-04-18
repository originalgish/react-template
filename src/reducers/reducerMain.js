import { SHOW_MODAL } from '../constants';

const initialState = {
  modalName: 0
};

export default function reducerMain(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalName: payload
      };

    default:
      return state;
  }
}
