import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPortalComponent } from './select-portal/select-portal.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { TeacherRegisterComponent } from './teacher/teacher-register/teacher-register.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { StudentWelcomePageComponent } from './student/student-welcome-page/student-welcome-page.component';
import { TeacherWelcomePageComponent } from './teacher/teacher-welcome-page/teacher-welcome-page.component';
import { UpdateResultComponent } from './teacher/update-result/update-result.component';
import { CreateMarksheetComponent } from './teacher/create-marksheet/create-marksheet.component';
import { ShowResultComponent } from './student/show-result/show-result.component';

const routes: Routes = [
  {
    path:"",
    component:SelectPortalComponent
  },

  {
    path:"student-login",
    component:StudentLoginComponent
  },

  {
    path:"student-register",
    component:StudentRegisterComponent
  },

  {
    path:"student-welcome",
    component:StudentWelcomePageComponent
  },

  {
    path:"teacher-login",
    component:TeacherLoginComponent
  },

  {
    path:"teacher-register",
    component:TeacherRegisterComponent
  },

  {
    path:"teacher-welcome",
    component:TeacherWelcomePageComponent
  },

  {
    path:"create-marksheet",
    component:CreateMarksheetComponent
  },

  {
    path:"update-marksheet",
    component:UpdateResultComponent
  },

  {
    path:"show-result",
    component:ShowResultComponent
  },

  {
    path:"select-portal",
    component:SelectPortalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
