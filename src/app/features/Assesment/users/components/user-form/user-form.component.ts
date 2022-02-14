import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ClientName, Offices, UserDetails } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  userForm: FormGroup;
  officeDetails: Offices[];
  clientName: ClientName[];
  idOfUserToEdit: number


  constructor(private userFormBuilder: FormBuilder,
    private userServices: UserService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.userBuildForm()
    this.getOfficeDetails()
    this.getClientNames()


    const id = parseInt(this.activatedRoute.snapshot.params['id']);


  }

  public userBuildForm() {
    this.userForm = this.userFormBuilder.group({
      id: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNo: ['', Validators.required],
      clientName: ['', Validators.required],
      office: ['', Validators.required],
    });
    console.log(this.userForm)
  }
  // function to get office details

  public getOfficeDetails() {
    this.userServices.getOffices().subscribe((res: Offices[]) => {
      this.officeDetails = res;
    })
  }
  // function to get office details

  public getClientNames() {
    this.userServices.getClients().subscribe((res: ClientName[]) => {
      this.clientName = res;
    })
  }

  // function to add user

  saveUser() {
    this.addUser();
    if (this.userForm.valid) {
      this.addUser();

    }
    else {
      this.validateAllFormFields(this.userForm);
    }





  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control?.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public addUser() {
    const userData = this.userForm.value
    this.userServices.addUser(userData).subscribe((res: UserDetails) => {
      alert('added')
    })
  }





  // function to patch user data into user
  public editUser(id: number) {
    this.userServices.getById(id).subscribe((res: UserDetails) => {
      this.userForm.patchValue(res);
      this.idOfUserToEdit = res.id;
    })
  }






  onCancel() {
    this.userForm.reset();
  }


  showForm: boolean = false;

  btnDisabled: boolean = false
  toogleForm() {

    this.showForm = true

    this.btnDisabled = true;
    this.route.navigateByUrl(`Users`)
  }


  get getValue() {
    return this.userForm['controls'];
  }
}
