import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form-input',
  templateUrl: './user-form-input.component.html',
  styleUrls: ['./user-form-input.component.css']
})


export class UserFormInputComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  get getValue() {
    return this.userForm['controls'];
  }

  onSubmit(){
    console.log('submit working')
this.router.navigate(['/user-forms/user-list'])
  }


  ngOnInit(): void {
    this.buildUserform();
  }
  buildUserform(){
    this.userForm = this.formBuilder.group({

      lastName: [],
      firstName:[],
      email:[],
      phoneNo: [],
      dateOfEmpmt: [],
      gender: []
  
    });
    // this.userForm = this.formBuilder.group({

    //   lastName: ['', Validators.required],
    //   firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
    //   email: [, Validators.email, Validators.required],
    //   phoneNo: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    //   dateOfEmpmt: [true, Validators.required],
    //   gender: []
  
    // });
  }
  }
 
