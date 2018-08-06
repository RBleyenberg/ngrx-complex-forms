import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';

import { LineItemEffects } from './line-item.effects';
import { LineItemService } from '@core/services/line-item.service';

export class TestActions extends Actions {
  constructor() {
    super(EMPTY);
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('LineItemService', () => {
  let actions$: Observable<any>;
  let effects: LineItemEffects;
  let lineItemService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LineItemEffects,
        {
          provide: LineItemService,
          useValue: { load: jest.fn() }
        },
        {
          provide: Actions,
          useFactory: getActions
        }
      ]
    });

    effects = TestBed.get(LineItemEffects);
    lineItemService = TestBed.get(LineItemService);
    actions$ = TestBed.get(Actions);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
