import * as actions from "../actions";

const stateDefault = {
  content: "",
  show: false,
};

export const toastReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actions.SET_TOAST:
      return {
        ...state,
        content: action.payload,
      };
    case actions.SHOW_TOAST:
      return {
        ...state,
        show: action.payload,
      };

    default:
      return state;
  }
};
