import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDemoComponent } from './reactive-demo.component';

describe('ReactiveDemoComponent', () => {
  let component: ReactiveDemoComponent;
  let fixture: ComponentFixture<ReactiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
