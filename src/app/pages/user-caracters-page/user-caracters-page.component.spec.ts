import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCaractersPageComponent } from './user-caracters-page.component';

describe('UserCaractersPageComponent', () => {
  let component: UserCaractersPageComponent;
  let fixture: ComponentFixture<UserCaractersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCaractersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCaractersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
