import { SHOW_MODAL } from '../constants'

export function showModal(modalName) {
  return {
    type: SHOW_MODAL,
    payload: modalName
  }
}
