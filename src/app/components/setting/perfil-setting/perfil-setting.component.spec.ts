import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSettingComponent } from './perfil-setting.component';

describe('PerfilSettingComponent', () => {
  let component: PerfilSettingComponent;
  let fixture: ComponentFixture<PerfilSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilSettingComponent]
    });
    fixture = TestBed.createComponent(PerfilSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
