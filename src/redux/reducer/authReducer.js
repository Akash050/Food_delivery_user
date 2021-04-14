import * as authActionType from "../actionsType/authActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case authActionType.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case authActionType.REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
