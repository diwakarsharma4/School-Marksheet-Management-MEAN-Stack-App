import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  studentData: any
  constructor() { }
  setData(data: any){
    this.studentData = data;
    console.log(this.studentData);
  }

  getData(){
    return this.studentData;
  }
}
