import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaysoporteSettingComponent } from './ayudaysoporte-setting.component';

describe('AyudaysoporteSettingComponent', () => {
  let component: AyudaysoporteSettingComponent;
  let fixture: ComponentFixture<AyudaysoporteSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyudaysoporteSettingComponent]
    });
    fixture = TestBed.createComponent(AyudaysoporteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
