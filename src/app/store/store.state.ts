import { createAction, createReducer, on, props } from "@ngrx/store";
import { ISearchTerm } from "../interfaces/SearchTerm";

export const appInitialStateState: ISearchTerm = {
  searchMovie: ''
};

export const searchAction = createAction('payload', props<{ term: string; }>());

export const appReducer = createReducer(
  appInitialStateState,
  on(searchAction, (state, action) => {
    state = {
      ...state,
      searchMovie: action.term
    };
    return state;
  }),
);