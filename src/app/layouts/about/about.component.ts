import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private admin_Service : AdminServiceService) { }
  submitted = false;
  form:any;
  freelancing: any = ['Available', 'Not Available'];
  freelance:boolean=false;
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['manojkapasia@gmail.com', [Validators.required, Validators.email]],
        website: ['http://nitin.netlify.co.in', [Validators.required]],
        city: ['Palwal', [Validators.required]],
        number: ['8930264279', [Validators.required]],
        experience: ['2', [Validators.required]],
        degree: ['B.tech', [Validators.required]],
        DOB: ['', [Validators.required]],
        age: ['30', [Validators.required]],
        freelancer: ['', [Validators.required]],
        textarea: ['This is our Data record', [Validators.required]]
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  
  selectFreeLancing(ev:any){
    // console.log("hello",this.form.controls.freelancer.value,ev);
    if(this.form.value.freelancer == 'Choose Freelance'){
      this.freelance=true;
      return;
    }else{
      this.freelance=false;
    }
    
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid || this.form.value.freelancer == 'Choose Freelance') {
      return;
    }
    console.log("hello",this.form.value);
    if(this.form.valid){
      this.admin_Service.saveUser(this.form.value).subscribe((res)=>{
        console.log("Data is save",res);
        
      })
    }
  }

}
