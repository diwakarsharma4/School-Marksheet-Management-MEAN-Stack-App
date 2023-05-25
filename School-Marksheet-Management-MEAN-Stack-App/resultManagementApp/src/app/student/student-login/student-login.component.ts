import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
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
    this.http.post("http://localhost:4000/student/login", bodyData).subscribe((resultData: any)=>{
      console.log(resultData);
    
      if(resultData.status){
        this.router.navigateByUrl('/student-welcome');
      }else{
        alert("invalid input");
        console.log("error login");
      }
    });
  }
}
