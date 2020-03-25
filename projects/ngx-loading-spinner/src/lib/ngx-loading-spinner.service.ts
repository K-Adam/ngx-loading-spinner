import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject, Observable, of, defer, race, timer } from 'rxjs';
import { debounce, tap, map, take, switchMap } from 'rxjs/operators';

enum SpinnerActionType { Show, Hide, None };
class SpinnerAction {
  type: SpinnerActionType;
  immediate: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NgxLoadingSpinnerService {

  public visibleSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private delayedSubject = new Subject<SpinnerActionType>();
  private immediateSubject = new Subject<SpinnerActionType>();

  private actionRequested: SpinnerActionType = SpinnerActionType.None;
  private actionExecuted: SpinnerActionType = SpinnerActionType.None;

  private _timeout: number = 10000;
  set timeout(timeout: number) {
    this._timeout = timeout;
    this.patchShow();
  }

  private _threshold: number = 500;
  set threshold(threshold: number) {
    this._threshold = threshold;
    this.patchShow();
  }

  constructor() {
    this.raceSubject();
  }

  private raceSubject() {
    let delayedSubject = this.delayedSubject.pipe(map(t => ({ type: t, immediate: false } as SpinnerAction)));
    let immediateSubject = this.immediateSubject.pipe(map(t => ({ type: t, immediate: true } as SpinnerAction)));

    let thresholdObserver = race(
      delayedSubject.pipe(debounce(() => timer(this._threshold))),
      immediateSubject
    ).pipe(
      take(1),
      tap((action: SpinnerAction) => {
        this.updatePublicState(action.type);
      }),
      map((action: SpinnerAction): SpinnerAction => {
        if (action.type == SpinnerActionType.Show) {
          return { type: SpinnerActionType.Hide, immediate: false } as SpinnerAction;
        } else {
          return action;
        }
      })
    );

    let timeoutObserver = race(
      thresholdObserver.pipe(
        switchMap((action: SpinnerAction): Observable<SpinnerAction> => (action.immediate ? of(action) : timer(this._timeout).pipe(map(_ => action))))
      ),
      immediateSubject
    ).pipe(take(1));

    timeoutObserver.subscribe((action: SpinnerAction) => {
      this.updatePublicState(action.type);
    },
      error => console.error(error),
      () => this.raceSubject()
    );
  }

  show() {
    this.actionRequested = SpinnerActionType.Show;
    this.immediateSubject.next(SpinnerActionType.None);
    this.delayedSubject.next(SpinnerActionType.Show);
  }

  hide() {
    this.actionRequested = SpinnerActionType.Hide;
    this.immediateSubject.next(SpinnerActionType.Hide);
  }

  //
  private patchShow() {
    if(this.actionRequested == SpinnerActionType.Show) {
      if(this.actionExecuted == SpinnerActionType.Show) {

      } else {
        this.immediateSubject.next(SpinnerActionType.None);
        this.delayedSubject.next(SpinnerActionType.Show);
      }
    }
  }

  private updatePublicState(type: SpinnerActionType) {
    switch (type) {
      case SpinnerActionType.Show:
        this.actionExecuted = type;
        this.visibleSubject.next(true);
        break;
      case SpinnerActionType.Hide:
        this.actionExecuted = type;
        this.visibleSubject.next(false);
        break;
    }
  }

}
