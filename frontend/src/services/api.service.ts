import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    headers: any;
    constructor(
        private http: HttpClient, private router: Router) {
    }

    // Error handling
    errorHandler(error) {
        let err = {
            errorMessage: '',
            errorCode: ''
        };
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            err.errorMessage = error.error.error;
        } else {
            err.errorCode = error.status;
            err.errorMessage = error.error.error;
        }
        console.log(err.errorMessage);
        return throwError(err);
    }

    // get countries
    async GetCountries() {
        let data = await this.http.get<any>("https://freakersmind.pythonanywhere.com/home_data")
            .pipe(
                retry(1),
                await catchError(this.errorHandler)
            ).toPromise();
        return data;
    }

    // fetch country details
    async GetCountryDetails(country_id) {
        let data = await this.http.get<any>("https://freakersmind.pythonanywhere.com/travel-details"+ '/'
        + country_id)
            .pipe(
                retry(1),
                await catchError(this.errorHandler)
            ).toPromise();
        return data;
    }

}