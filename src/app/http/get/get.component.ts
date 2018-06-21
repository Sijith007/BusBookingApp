import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../shared/services/ajax.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  dataFromServer: any;

  constructor(private dataService: AjaxService) { }

  ngOnInit() {
    this.getData(); 
    this.postdata(); 
  }

  getData() {
    this.dataService.getData().subscribe(resp=>{
      this.dataFromServer = resp;
    })
  }

  postdata(){
    debugger;
    this.dataService.postData().subscribe(resp=>{
      console.log(resp);
    })
  }

}
