import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  getEndPoint(key: string) {
    return window['APPLICATION_CONFIG']['ServiceEndPoints'][key];
  }

  getInfo(key: string) {
    return window['APPLICATION_CONFIG'][key];
  }
}

export class AppConstants{
    public USER_SERVICE_URL = 'userServiceURL';
}