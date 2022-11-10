import { createAction, createReducer, on, props } from "@ngrx/store";

export interface ISearchTerm {
  searchMovie: string;
}

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