import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-user-form-list',
  templateUrl: './user-form-list.component.html',
  styleUrls: ['./user-form-list.component.scss']
})
export class UserFormListComponent implements OnInit {

  users:User[];

  constructor(private service:CrudService) { }

  ngOnInit(): void {
    console.log("list ng onInIt");
    
  this.getUserData()
  }

  getUserData(){
    this.service.getAll().subscribe((data)=>{
      this.users=data
    })
  }

}
