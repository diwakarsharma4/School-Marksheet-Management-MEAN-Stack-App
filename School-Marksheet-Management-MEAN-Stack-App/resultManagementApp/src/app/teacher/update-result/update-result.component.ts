import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../shared/shared.service';
import { animate } from '@angular/animations';


@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})


export class UpdateResultComponent {
  Roll_No: string = "";
  Name: string = "";
  Date_of_Birth: string = "";
  Score: string = "";

studentData: any
constructor(private shared: SharedService, private router: Router, private http: HttpClient){}
ngOnInit(): void{
  this.studentData = this.shared.getData();
  console.log("from update component", this.studentData);
  this.Name = this.studentData.Name;
  this.Roll_No = this.studentData.Roll_No;
  this.Date_of_Birth = this.studentData.Date_of_Birth;
  this.Score = this.studentData.Score;

}

submit(){
  let updatedData = {
    "Roll_No": this.Roll_No,
    "Name": this.Name,
    "Date_of_Birth": this.Date_of_Birth,
    "Score": this.Score
  }

  console.log(this.studentData._id, updatedData, this.Roll_No);

  this.http.patch("http://localhost:4000/marksheet/update" + "/" + this.studentData._id, updatedData, {responseType:'text'}).subscribe((resultData: any)=>{
    console.log(resultData);
    alert("record updated successfully");
    this.router.navigateByUrl('/teacher-welcome');
  })
}

clear(){
  this.Roll_No = "";
  this.Name = "";
  this.Date_of_Birth = "";
  this.Score = "";
}
}
