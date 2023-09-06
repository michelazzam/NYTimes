import { ADD_FAVORITE } from "../actions/Types";

type StateType = {
  favorite: Array<string | number>; // Assuming favorites are strings or numbers
};

type ActionType = {
  type: typeof ADD_FAVORITE;
  payload: string | number; // Assuming favorites are strings or numbers
};

const initialState: StateType = {
  favorite: [],
};

export default (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case ADD_FAVORITE:
      let favorite = [...state.favorite]; // Create a shallow copy to avoid mutating state directly
      let newFavorite = action.payload;

      if (favorite.includes(newFavorite)) {
        favorite = favorite.filter((item) => item !== newFavorite);
      } else {
        favorite.push(newFavorite);
      }
      return {
        ...state,
        favorite,
      };

    default: // Always include a default case in reducers to return current state
      return state;
  }
};
