import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService, AppConstants } from './config.service';
import { Lead } from '../modals/Lead';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

    constructor(private http: HttpClient,
    private config: ConfigurationService,
    private constants: AppConstants ) { }

    getAllLeads(){
      return this.http.get<Lead[]>(`${this.config.getEndPoint(this.constants.USER_SERVICE_URL)}/api/leads`).pipe(map(leads=>{
        return leads;
      }));
    }
}
