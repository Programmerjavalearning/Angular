import { Component } from '@angular/core';
import { Selfie } from './models/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie de Bart';
  subTitle = 'Mon application';
  logoAffiche = true;
  lesSelfies:Selfie[] = [

    {image:'', bart: {nom:'bart', selfies:[] } },
    {image:'', bart: {nom:'bart 2', selfies:[] } }
    
  ];

}
