import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {
  public resumeData: ResumeData;


  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.getResumeData(1);
  }
getResumeData(id: number){
  this.resumeService.getResumeInfo(id).subscribe((res: ResumeData) => {
    this.resumeData = res;
  })
}
}
