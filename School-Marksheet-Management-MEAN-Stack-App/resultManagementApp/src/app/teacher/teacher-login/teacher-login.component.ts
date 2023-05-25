import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent {
username : string = "";
password : string = "";

isLogin: boolean = true;
errorMsg: string = "";

constructor(private router: Router, private http: HttpClient){}
login(){
  console.log(this.username);
  console.log(this.password);

  let bodyData = {
    username: this.username,
    password: this.password,
  };

  console.log(bodyData);
  this.http.post("http://localhost:4000/teacher/login", bodyData).subscribe((resultData: any)=>{
    console.log(resultData);
  
    if(resultData.status){
      this.router.navigateByUrl('/teacher-welcome');
    }else{
      alert("invalid input");
      console.log("error login");
    }
  });
}
}
