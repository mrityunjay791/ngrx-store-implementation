import { Action } from '@ngrx/store';
import { Tutorial } from './../model';

import * as TutorialActions from './../actions';

const initialState: Tutorial = {
    name: 'google',
    url: 'google.com'
};

export function tutorialReducer(state: Tutorial[]= [initialState], action: TutorialActions.Action) {

  switch (action.type) {

    case TutorialActions.ADD_TUTORIAL: {
      return [...state, action.payload];
    }

    case TutorialActions.REMOVE_TUTORIAL: {
      state.splice(action.payload, 1);
      return state;
    }

    default: return state;
  }

}

