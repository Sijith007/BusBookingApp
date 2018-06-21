import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedOption;
  options = [{id: 1, name: 'GET', url: 'get'}, {id: 2, name: 'POST', url: 'post'}];

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  loadAjax() {debugger;
    this._router.navigate([this.selectedOption]);
  }

}
