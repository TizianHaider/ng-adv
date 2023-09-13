import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorActions } from './error.action';

@Injectable()
export class ErrorEffects {
  actions$ = inject(Actions);
  router = inject(Router);

  redirectToError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ErrorActions.redirectToError),
      exhaustMap(() => {
        this.router.navigate(['/error']);
        return EMPTY.pipe(
          map(() => ({ type: 'Redirected to Error' }))
        );
      })
    )
  );
}
