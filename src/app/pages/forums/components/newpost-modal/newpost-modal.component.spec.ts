import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostModalComponent } from './newpost-modal.component';

describe('NewpostModalComponent', () => {
  let component: NewpostModalComponent;
  let fixture: ComponentFixture<NewpostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewpostModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
