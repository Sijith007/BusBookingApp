import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AjaxService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) {

  }

  getData() {
    return this.http.get(this.baseUrl+'posts');
  }

  postData() {
    let obj = {title:'sera'}
    return this.http.post(this.baseUrl+"posts",obj)
  }

}
