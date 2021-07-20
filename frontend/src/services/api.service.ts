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

    // get users
    async GetUsers() {
        let data = await this.http.get<any>("https://jsonplaceholder.typicode.com/users")
            .pipe(
                retry(1),
                await catchError(this.errorHandler)
            ).toPromise();
        return data;
    }

}