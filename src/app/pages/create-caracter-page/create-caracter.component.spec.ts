import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaracterComponent } from './create-caracter.component';

describe('CreateCaracterComponent', () => {
  let component: CreateCaracterComponent;
  let fixture: ComponentFixture<CreateCaracterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaracterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
