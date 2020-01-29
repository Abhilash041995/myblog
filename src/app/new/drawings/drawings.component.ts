import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.css']
})
export class DrawingsComponent implements OnInit {

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
