import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-gateway-settings',
  templateUrl: './gateway-settings.component.html',
  styleUrls: ['./gateway-settings.component.scss'],
})
export class GatewaySettingsComponent implements OnInit {
  regions = ['region1', 'region2'];
  gatewaySettings: any = {
    'key-auth': ' key-auth content',
    cors: ' cors content',
    acl: ' acl content',
    'ip-restriction': ' ip-restriction content',
    'rate-limiting': 'rate-limiting content',
  };

  selectedSettings: string[] = ['key-auth', 'acl'];
  gatewayKeys = Object.keys(this.gatewaySettings);

  gatewaySettingsForm: FormControl = new FormControl(this.selectedSettings);

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(event: any) {
    this.selectedSettings = event.value;
  }

  removeTab(key: string) {
    const index = this.selectedSettings.indexOf(key);
    if (index !== -1) {
      this.selectedSettings.splice(index, 1);
      this.gatewaySettingsForm.setValue(this.selectedSettings);
    }
  }
}
