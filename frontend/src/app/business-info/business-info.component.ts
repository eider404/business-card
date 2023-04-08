import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BusinessCardInfo } from '../info';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {
  businessInfo: BusinessCardInfo|undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBusinessInfo();
  }

  async getBusinessInfo() {
    this.businessInfo = await this.apiService.getBusinessInfo();
  }
}