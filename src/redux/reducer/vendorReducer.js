import * as userActionType from "../actionsType/vendorActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case userActionType.ALL_VENDOR:
      return action.payload;
    case userActionType.VENDOR_BY_ID:
      return {
        userData: action.payload,
      };
    default:
      return state;
  }
};
