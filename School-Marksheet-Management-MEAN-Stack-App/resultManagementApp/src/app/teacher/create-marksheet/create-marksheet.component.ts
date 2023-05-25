import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-marksheet',
  templateUrl: './create-marksheet.component.html',
  styleUrls: ['./create-marksheet.component.css']
})
export class CreateMarksheetComponent {
Roll_No: string = "";
Name: string = "";
Date_of_Birth: string = "";
Score: string = "";

constructor(private router: Router, private http: HttpClient){}
ngOnInit(): void{}

create(){
  let bodyData = {
    "Roll_No" : this.Roll_No,
    "Name" : this.Name,
    "Date_of_Birth" : this.Date_of_Birth,
    "Score" : this.Score
  };
  this.http.post("http://localhost:4000/marksheet/create", bodyData).subscribe((resultData: any)=>{
    console.log(resultData);

    if(resultData.status){
      alert("added successfull");
      this.router.navigateByUrl('/teacher-welcome');
    }else{
      alert("invalid input");
      console.log("error registering");
    }
  });
}

clear(){
  this.Roll_No = "";
  this.Name = "";
  this.Date_of_Birth = "";
  this.Score = "";
}

}
