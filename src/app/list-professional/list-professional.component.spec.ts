import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfessionalComponent } from './list-professional.component';

describe('ListProfessionalComponent', () => {
  let component: ListProfessionalComponent;
  let fixture: ComponentFixture<ListProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
