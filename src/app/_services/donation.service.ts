import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
  
@Injectable()
export class DonationService {
    constructor(private http: HttpClient) {
     }

    donate(data: any): any {
        return this.http.post(environment.donate, data)
            .pipe(map(res => {
                return res;
            }),catchError(err => throwError(err)));
    }

    getOrganizationDetailByLocationId(accountId: string, locationId: string) {
        return this.http.get(environment.offering + locationId + '/pageinfo/' + accountId);
    }

    getOrganizationDetailByFundId(accountId: string, fundId: string) {
        return this.http.get(environment.relieffund + fundId + '/pageinfo/' + accountId);
    }
}