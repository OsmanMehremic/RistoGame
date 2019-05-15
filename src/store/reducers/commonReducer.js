import { COMMON } from '../definitions';
const initialState = {
  modal_show: false,
  init: false,
  lang: 'en'
}
const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMON.INIT:
      return {
        ...state,
        init: true
      };
    case COMMON.LANG_CHANGE:
      return {
        ...state,
        lang: action.lang
      };
    case COMMON.MODAL_OPEN:
      return {
        ...state,
        modal_show: true
      }
    case COMMON.MODAL_HIDE:
      return {
        ...state,
        modal_show: false
      }
    default:
      return state;
  }
};

export default commonReducer;