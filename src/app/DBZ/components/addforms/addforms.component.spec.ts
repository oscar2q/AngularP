import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformsComponent } from './addforms.component';

describe('AddformsComponent', () => {
  let component: AddformsComponent;
  let fixture: ComponentFixture<AddformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
