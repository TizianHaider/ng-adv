import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ErrorActions = createActionGroup({
  source: 'Error',
  events: {
    redirectToError: emptyProps(),
  }
});
