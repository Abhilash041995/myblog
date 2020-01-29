import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function()
    {
      $("#contacttab").addClass("active");
      $(`#hometab`).removeClass("active");
      if( window.localStorage )
      {
        if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }  
        else
          localStorage.removeItem('firstLoad');
      }
    })();
  }

}
