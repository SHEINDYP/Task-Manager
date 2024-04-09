import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNewTaskComponent } from './insert-new-task.component';

describe('InsertNewTaskComponent', () => {
  let component: InsertNewTaskComponent;
  let fixture: ComponentFixture<InsertNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertNewTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
