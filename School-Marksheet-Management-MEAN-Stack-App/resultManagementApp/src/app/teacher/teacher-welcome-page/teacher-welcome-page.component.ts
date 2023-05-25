import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-teacher-welcome-page',
  templateUrl: './teacher-welcome-page.component.html',
  styleUrls: ['./teacher-welcome-page.component.css']
})
export class TeacherWelcomePageComponent {

  marksheetArray: any[] = [];
  constructor(private router: Router, private http: HttpClient, private shared: SharedService){
    this.getAllMarksheets();
  }

  getAllMarksheets(){
    this.http.get("http://localhost:4000/marksheet/getAll").subscribe((resultData: any)=>{
      this.marksheetArray = resultData.message;
      console.log(this.marksheetArray);  
    });
  }


  delete(studentItem: any){
    console.log("the id is:", studentItem._id);
    this.http.delete("http://localhost:4000/marksheet/delete"+"/"+studentItem._id).subscribe((resultData: any)=>{
      console.log("deleted");
      alert("record deleted successfully");
      this.getAllMarksheets();
    })
  }


  studentData: any
  update(studentItem: any){
    this.studentData = studentItem;
    this.ngOnInit(this.studentData);
    // console.log("from update button", this.studentData, "end msg");
    this.router.navigateByUrl('/update-marksheet');
  }

  ngOnInit(studentData: any):void{
    console.log("from update button", studentData, "end msg");
    this.shared.setData(studentData);
  }

}
