import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuClick(tab){
    //   (function()
    //   {
    //   if(tab =='hometab'){
    //     $(`#hometab`).addClass('active')
    //     $(`#contacttab`).removeClass('active')
    //     $("#menuUl").not("#"+tab).removeClass("active");
    //   }else if(tab =='contacttab'){
    //     console.log(tab)
    //     // $("#"+tab).addClass("active");
    //     $(`#contacttab`).addClass('active')
    //     $(`#hometab`).removeClass('active')
    //     // $("#menuUl").not("#"+tab).removeClass("active");
    //   }
    // //  $(`.colorlib-nav-toggle`).removeClass('show');
    //  })();
    }
}
