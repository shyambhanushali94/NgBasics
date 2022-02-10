import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ResumeData } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  // education = new FormArray([]);
  // technicalSkillsArray = new FormArray([]);


  resumeForm: FormGroup;
  technicalSkillsArray: FormArray = this.resumeFormBuilder.array([]);
  experienceArray: FormArray = this.resumeFormBuilder.array([]);
  educationArray: FormArray = this.resumeFormBuilder.array([]);
  // xyz:FormArray;




  // addControlToArray(): void {
  //     this.technicalSkillsArray.push(new FormControl(''));
  //   }



  constructor(private resumeFormBuilder: FormBuilder, private resumeService:ResumeService) { }

  ngOnInit(): void {
    this.resumebuildForm();
    this.addTechnicalSkill();
    this.addExperience();
    this.addEucation();
  }

  public resumebuildForm() {
    this.resumeForm = this.resumeFormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      designation: [''],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      technicalSkills: this.technicalSkillsArray,
      // technicalSkills: this.resumeFormBuilder.array([this.addTechnicalSkill()]),
      experience: this.experienceArray,
      education: this.educationArray
    });
    console.log(this.resumeForm);
  }

  addskillfield() {
    return this.resumeFormBuilder.group({
      skillName: ['']
    })
  }

  addTechnicalSkill() {
    this.technicalSkillsArray.push(this.addskillfield());
    console.log(this.resumeForm);
  }

  deleteTechnicalSkill(index: number) {
    if (this.technicalSkillsArray.length != 1) this.technicalSkillsArray.removeAt(index);
  }

  createExperienceGroup() {
    return this.resumeFormBuilder.group({
      companyName: [''],
      designation: [''],
      description: [''],
      startYear: [''],
      endYear: ['']
    })
  }

  addExperience() {
    this.experienceArray.push(this.createExperienceGroup());
    console.log(this.resumeForm);
  }

  deleteExperience(index: number) {
    if (this.experienceArray.length != 1) this.experienceArray.removeAt(index);
  }

  createEducationGroup() {
    return this.resumeFormBuilder.group({
      university: [''],
      course: [''],
      grade: ['']
    })
  }

  addEucation(){
    this.educationArray.push(this.createEducationGroup());
  }

  deleteEducation(index:number){
    if(this.educationArray.length !=1) this.educationArray.removeAt(index);
  }

  public postResumeData(){
    const resumeData = this.resumeForm.value
    this.resumeService.addResumeData(resumeData).subscribe((res: ResumeData) =>{
    alert("data added")
    
    })
  }


  
}
