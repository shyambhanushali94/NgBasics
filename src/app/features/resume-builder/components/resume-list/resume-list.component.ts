import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeData } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {
  public resumeDetailLists: ResumeData[];

  constructor(private resumeService: ResumeService, private route: Router) { }

  ngOnInit(): void {
    this.getLists();
  }
  getLists() {
    this.resumeService.getResumeList().subscribe((res: ResumeData[]) => {
      this.resumeDetailLists = res;
    })
  }

  viewResume(id: number) {
    this.route.navigate([`/resume/resume-view/${id}`]);
  }
}
