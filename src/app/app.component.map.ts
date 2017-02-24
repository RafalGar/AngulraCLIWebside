import { Component } from '@angular/core';

import {SebmGoogleMap} from 'angular2-google-maps/core';

@Component({
 selector: 'my-map-cmp',
 directives: [SebmGoogleMap],
 styles: [`
   .sebm-google-map-container {
     height: 300px;
   }
`],
 template: `
   <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
   </sebm-google-map>
 `
})
