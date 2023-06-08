import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  submitted = false;
  form:any;
  freelancing: any = ['Available', 'Not Available'];
  freelance:boolean=false;
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['manoj@gmil.com', [Validators.required, Validators.email]],
        website: ['321', [Validators.required]],
        city: ['3213', [Validators.required]],
        number: ['323221', [Validators.required]],
        experience: ['23', [Validators.required]],
        degree: ['46', [Validators.required]],
        DOB: ['2022-02-20', [Validators.required]],
        age: ['5', [Validators.required]],
        freelancer: ['', [Validators.required]],
        textarea: ['46556464', [Validators.required]]
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
  }

}
