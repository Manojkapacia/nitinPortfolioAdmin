import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    website: new FormControl(''),
    city: new FormControl(''),
    number: new FormControl(''),
    experience: new FormControl(''),
    degree: new FormControl(''),
    DOB: new FormControl(''),
    age: new FormControl(''),
    freelancer: new FormControl(''),
    textarea: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        website: ['', [Validators.required]],
        city: ['', [Validators.required]],
        number: ['', [Validators.required]],
        experience: ['', [Validators.required]],
        degree: ['', [Validators.required]],
        DOB: ['', [Validators.required]],
        age: ['', [Validators.required]],
        freelancer: ['', [Validators.required]],
        textarea: ['', [Validators.required]]
      }
    );
  }
  

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log("hello");
    

    if (this.form.invalid) {
      return;
    }
  }

}
