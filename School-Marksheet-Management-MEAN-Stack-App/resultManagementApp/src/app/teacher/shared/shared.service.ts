import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  studentData: any
  constructor() { }
  setData(data: any){
    this.studentData = data;
    console.log("data set is", this.studentData);
  }

  getData(){
    return this.studentData;
  }
}
