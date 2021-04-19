import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMarcasComponent } from './ng-marcas.component';

describe('NgMarcasComponent', () => {
  let component: NgMarcasComponent;
  let fixture: ComponentFixture<NgMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
