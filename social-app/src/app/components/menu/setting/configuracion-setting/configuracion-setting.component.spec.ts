import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionSettingComponent } from './configuracion-setting.component';

describe('ConfiguracionSettingComponent', () => {
  let component: ConfiguracionSettingComponent;
  let fixture: ComponentFixture<ConfiguracionSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionSettingComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
