import * as userActionType from "../actionsType/userActionType";

export default (state = {}, action) => {
    switch (action.type) {
        case userActionType.GET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};