import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-student-welcome-page',
  templateUrl: './student-welcome-page.component.html',
  styleUrls: ['./student-welcome-page.component.css']
})
export class StudentWelcomePageComponent {
  Roll_No: string = "";
  Name: string = "";

  marksheetArray: any[] = [];
  foundData: any[] = [];
  constructor(private router: Router, private http: HttpClient, private shared: SharedService){}

  dataFound: any;
  search(){
    let bodyData = {
      "Roll_No" : this.Roll_No,
      "Name" : this.Name
    };
 
    this.http.get("http://localhost:4000/marksheet/getAll").subscribe((resultData: any)=>{
      this.marksheetArray = resultData.msg;
      this.foundData = resultData.message.find((item: { Roll_No: string; Name: string; })=>item.Roll_No==bodyData.Roll_No && item.Name==bodyData.Name);
      this.dataFound = this.foundData;
      console.log(this.foundData);
      this.ngOnInit(this.dataFound);
      this.router.navigateByUrl('/show-result');
    });
  }

  ngOnInit(dataFound: any):void{
    console.log(dataFound);
    this.shared.setData(dataFound);
  }


  clear(){
    this.Roll_No = "";
    this.Name = "";
  }

}
