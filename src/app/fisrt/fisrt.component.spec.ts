import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisrtComponent } from './fisrt.component';

describe('FisrtComponent', () => {
  let component: FisrtComponent;
  let fixture: ComponentFixture<FisrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
