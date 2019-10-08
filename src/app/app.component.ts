import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics=['computer science', 'Information system' , 'Other'];
 topicHasError=true;

 userModel = new User('Lila','lila@gmail.com',+9476271431,'default','morning',true);

 user: User;
constructor(private _enrollmentService: EnrollmentService) {}

 validateTopic(value){
  if(value==='default'){
    this.topicHasError=true;
  }
  else{
    this.topicHasError=false;
  }
 }

 ngOnInit() {
  this.resetForm();
}

resetForm(form?:NgForm)
{
if(form != null)
form.reset();  
this.user={
  name:'',
  email:'',
  phone:'',
  topic:'',
  timePreference:'',
  subscribe:''
}
}
onSubmit(){
 this._enrollmentService.enroll(this.userModel)
 .subscribe(
   data=>console.log('Success!',data),
   error=>console.error('Error!',error)
   
 )
}

}
