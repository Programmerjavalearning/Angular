import { Component, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {


  lesSelfies:Selfie[] = [

    {image:'https://www.lesitedelasneaker.com/wp-content/images/2022/01/preview-nike-sb-dunk-low-bart-simpson-bq6817-602-pic06-1100x815.jpg', bart: {nom:'bart', selfies:[] }, titre:'un premier selfie' },
    {image:'https://www.lesitedelasneaker.com/wp-content/images/2022/01/preview-nike-sb-dunk-low-bart-simpson-bq6817-602-pic06-1100x815.jpg', bart: {nom:'bart 2', selfies:[] }, titre:'un selfie deux' }
   
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
