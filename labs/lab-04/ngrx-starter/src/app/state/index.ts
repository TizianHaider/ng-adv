import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState, appState } from '../app.state';

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appState.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];