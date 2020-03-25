import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject, of, defer, race, timer } from 'rxjs';
import { debounce, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxLoadingSpinnerService {

  public visibleSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private showSubject = new Subject();
  private hideSubject = new Subject();

  private _timeout: number = 10000;
  set timeout(timeout: number) {
    this._timeout = timeout;
    this.showSubject.next();
  }

  constructor() {
    this.raceSubject();
  }

  private raceSubject() {
    race(
      this.showSubject.pipe(debounce(() => timer(this._timeout))),
      this.hideSubject
    )
      .pipe(take(1))
      .subscribe(() => {
        this.updateState(false);
      },
        error => console.error(error),
        () => this.raceSubject()
      );
  }

  show() {
    this.updateState(true);
    this.showSubject.next();
  }

  hide() {
    this.hideSubject.next();
  }

  private updateState(spinnerVisible: boolean) {
    this.visibleSubject.next(spinnerVisible);
  }

}
