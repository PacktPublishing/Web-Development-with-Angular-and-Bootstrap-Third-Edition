import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImageSourcesCount() {
   
    let sources = [
      {outlet : 'NYTimes'},
      {outlet : 'Google'},
      {outlet : 'Huffington Post'},
      {outlet : 'Yahoo'},
    ];
    return sources;
  }
}
