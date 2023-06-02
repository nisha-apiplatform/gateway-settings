import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaySettingsComponent } from './gateway-settings.component';

describe('GatewaySettingsComponent', () => {
  let component: GatewaySettingsComponent;
  let fixture: ComponentFixture<GatewaySettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatewaySettingsComponent]
    });
    fixture = TestBed.createComponent(GatewaySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
