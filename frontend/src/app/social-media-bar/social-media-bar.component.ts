import { Component } from '@angular/core';
import { Input } from '@angular/core';  
import { BusinessCardInfo } from '../info';


@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.css']
})


export class SocialMediaBarComponent {
//add the Input decorator to the property
  @Input() socialNetworkDetail: BusinessCardInfo | undefined;
}
