import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
/* import { ActivatedRoute } from '@angular/router'; */
import { ApiService } from '../api.service';
import { BusinessCardInfo } from '../info';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  businessInfo: BusinessCardInfo|undefined;
  id!: number;

  public showInstallPrompt: boolean = false;
  private deferredPrompt: any;
  
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event;
      this.showInstallPrompt = true;
    });
  }



  installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        this.deferredPrompt = null;
        this.showInstallPrompt = false;
      });
    }
  }


  //get con id
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getBusinessInfo();
    
  }

  async getBusinessInfo() {
    this.businessInfo = await this.apiService.getBusinessInfo(this.id);
  }

  


  //movimiento
  /* onMouseMove(event: MouseEvent) {
    const box = event.target as HTMLElement;
    const { offsetWidth: boxWidth, offsetHeight: boxHeight } = box;
    const { clientX: mouseX, clientY: mouseY } = event;

    // const rotateX = (boxHeight / 2 - mouseY) / 10;
    //const rotateY = (mouseX - boxWidth / 2) / 10;
     
    const halfWidth = boxWidth/2;
    const halfHeight = boxHeight/2;

    const rotateX = ((mouseY - halfHeight) /halfHeight) * 10;
    const rotateY = ((mouseX - halfWidth) /halfWidth) * 10;

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
 */






  

}
