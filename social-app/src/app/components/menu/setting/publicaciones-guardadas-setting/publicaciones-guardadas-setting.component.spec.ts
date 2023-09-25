import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesGuardadasSettingComponent } from './publicaciones-guardadas-setting.component';

describe('PublicacionesGuardadasSettingComponent', () => {
  let component: PublicacionesGuardadasSettingComponent;
  let fixture: ComponentFixture<PublicacionesGuardadasSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicacionesGuardadasSettingComponent]
    });
    fixture = TestBed.createComponent(PublicacionesGuardadasSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
