import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent {
  username : string = "";
  password : string = "";

constructor(private router:Router, private http: HttpClient){}

ngOnInit(): void{}

register(){
  let bodyData = {
    "username" : this.username,
    "password" : this.password
  };
  this.http.post("http://localhost:4000/teacher/create", bodyData).subscribe((resultData: any)=>{
    console.log(resultData);

    if(resultData.status){
      alert("registraiton successfull");
      this.router.navigateByUrl('/teacher-login');
    }else{
      alert("invalid input");
      console.log("error registering");
    }
  });
}

save(){
  this.register();
}
}
