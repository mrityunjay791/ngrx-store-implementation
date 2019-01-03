import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../model';
import * as TutorialActions from './../actions/';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newTutorial: Tutorial = {
    name: '',
    url: ''
  };

  postNewTutorialData: Tutorial;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  addTutorial() {
    let ref = this;
    ref.postNewTutorialData = ref.newTutorial;
    ref.newTutorial = {
      name: '',
      url: ''
    };
    ref.store.dispatch(new TutorialActions.AddTutorial(ref.postNewTutorialData));
  }

}
