import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { Utils } from '../utils';
import { ISociete, ISocieteResponse } from '../interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataLayerService {
    baseUrl = environment.apiUrl;
    baseEntitysUrl = this.baseUrl + 'societe';
    baseStatesUrl = this.baseUrl + 'states';
    auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50aWQiOiJCcmFuY2hBIiwiZXhwIjoxNzE5MjIwNTk2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxMTMvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MTEzLyJ9.wMw8A7VRM5Cnhz_guYiWb3b46A-iAfueThZREDSizN4';
    constructor(
        private http: HttpClient
    ) { }


    getInvoices() {
        return this.http.get<any[]>('/api/invoices');
    }
    getInvoice(id) {
        return this.http.get<any[]>('/api/invoices/'+id);
    }
    saveInvoice(invoice) {
        if(invoice.id) {
            return this.http.put<any[]>('/api/invoices/'+invoice.id, invoice);
        } else {
            invoice.id = Utils.genId();
            return this.http.post<any[]>('/api/invoices/', invoice);
        }
    }
    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/invoices/'+id);
    }
    getMails() {
        return this.http.get<any[]>('/api/mails');
    }
    getCountries() {
        return this.http.get<any[]>('/api/countries');
    }
    getProducts() {
        return this.http.get<any[]>('api/products');
    }


    saveSociete(societe: ISociete) : Observable<ISociete> { 
     
        // const headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${this.auth_token}`
        //   });
        const reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth_token
         });
        return this.http.post<ISocieteResponse>(this.baseEntitysUrl, societe,{ headers: reqHeader })
        .pipe(                   
            map((data) => {
                   console.log('insertCustomer status: ' + data.status);
                   return data.societe;
               }),
            catchError(this.handleError)
        );
        // if(societe.id) {
        //     return this.http.put<ISocieteResponse>('/societe/'+societe.id, societe);
        // } else {
        //     societe.id = 0;
        //     return this.http.post<ISocieteResponse>('/societe/', societe);
        // }
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(() => new Error(errMessage));
          // Use the following instead if using lite-server
          
        }
        return throwError(() => new Error(error.message || 'Node.js server error'));
    }
}
