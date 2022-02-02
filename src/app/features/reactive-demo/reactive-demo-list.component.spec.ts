import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDemoListComponent } from './reactive-demo-list.component';

describe('ReactiveDemoListComponent', () => {
  let component: ReactiveDemoListComponent;
  let fixture: ComponentFixture<ReactiveDemoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveDemoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
