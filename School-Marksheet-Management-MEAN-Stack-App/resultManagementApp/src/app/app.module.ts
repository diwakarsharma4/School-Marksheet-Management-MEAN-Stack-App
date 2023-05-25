import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPortalComponent } from './select-portal/select-portal.component';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentWelcomePageComponent } from './student/student-welcome-page/student-welcome-page.component';
import { TeacherWelcomePageComponent } from './teacher/teacher-welcome-page/teacher-welcome-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { TeacherRegisterComponent } from './teacher/teacher-register/teacher-register.component';
import { StudentRegisterComponent } from './student/student-register/student-register.component';
import { ShowResultComponent } from './student/show-result/show-result.component';
import { CreateMarksheetComponent } from './teacher/create-marksheet/create-marksheet.component';
import { UpdateResultComponent } from './teacher/update-result/update-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPortalComponent,
    TeacherLoginComponent,
    StudentLoginComponent,
    StudentWelcomePageComponent,
    TeacherWelcomePageComponent,
    TeacherRegisterComponent,
    StudentRegisterComponent,
    ShowResultComponent,
    CreateMarksheetComponent,
    UpdateResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
