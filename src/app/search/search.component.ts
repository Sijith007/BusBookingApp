import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      fromPlace: new FormControl('tvm', [Validators.required]),
      toPlace: new FormControl('knr', [Validators.required, Validators.minLength(3)]),
      date: new FormControl('', [Validators.required]),
    });
  }
  validateSearch() {
    debugger;
    this._router.navigate(['book-seat', this.searchForm.value]);
  }

}
