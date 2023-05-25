import { Component } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent {
  studentData: any
constructor(private shared: SharedService){}
ngOnInit(): void{
  this.studentData = this.shared.getData();
  console.log(this.studentData);
}
}
