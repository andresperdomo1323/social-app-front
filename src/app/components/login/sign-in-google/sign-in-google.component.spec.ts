import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInGoogleComponent } from './sign-in-google.component';

describe('SignInGoogleComponent', () => {
  let component: SignInGoogleComponent;
  let fixture: ComponentFixture<SignInGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInGoogleComponent]
    });
    fixture = TestBed.createComponent(SignInGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
