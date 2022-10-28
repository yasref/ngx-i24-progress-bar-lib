import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxI24ProgressBarComponent } from './ngx-i24-progress-bar.component';

describe('NgxI24ProgressBarComponent', () => {
  let component: NgxI24ProgressBarComponent;
  let fixture: ComponentFixture<NgxI24ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxI24ProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxI24ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
