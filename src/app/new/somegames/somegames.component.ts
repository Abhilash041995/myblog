import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somegames',
  templateUrl: './somegames.component.html',
  styleUrls: ['./somegames.component.css']
})
export class SomegamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function () {
      if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }
        else
          localStorage.removeItem('firstLoad');
      }
    })();
  }

}
