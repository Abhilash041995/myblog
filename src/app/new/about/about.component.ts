import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
