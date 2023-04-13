import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BusinessCardInfo } from '../info';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent {
  @Input() businessInfo: BusinessCardInfo | undefined;
  
  constructor() { }
}