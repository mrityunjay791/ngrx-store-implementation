import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/observable';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Tutorial } from './../model';
import * as TutorialActions from './../actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  readonly tutorials: Observable<Tutorial[]>;


  constructor(
    private store: Store<AppState>
  ) {
    this.tutorials = this.store.select('tutorials');
  }

  ngOnInit() {
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));

  }

}
