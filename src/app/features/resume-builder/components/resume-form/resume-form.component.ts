import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeForm: FormGroup;
  technicalSkills = new FormArray([]);
  experience = new FormArray([]);
  education = new FormArray([]);
  



addControlToArray(): void {
    this.technicalSkills.push(new FormControl(''));
  }

  get skills(): FormArray{
    return this.resumeForm.get("skills") as FormArray
  }
  constructor(private resumeFormBuilder: FormBuilder,) { }

  ngOnInit(): void {
  this.resumebuildForm();

  }

  public resumebuildForm() {
    this.resumeForm = this.resumeFormBuilder.group({
      firstName: ['jigar', Validators.required],
      lastName: ['bhanushali', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      technicalSkills: [''],
      experience: [''],
      education: ['']
    });
}
}
