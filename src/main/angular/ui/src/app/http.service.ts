import { Injectable } from '@angular/core';
import { Person } from './Person';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

    private CREATION_PERSON_LINK = 'http://localhost:8080/people';

    constructor(private httpClient: HttpClient) { }

    me(): Observable<any> {
        return this.httpClient.get('/me', {headers: this.makeHeaders()});
    }

    logout(): Observable<any> {
        return this.httpClient.post('/logout', '', {headers: this.makeHeaders()});
    }

    getPeople(): Observable<any> {
        return this.httpClient.get('/people', {headers: this.makeHeaders()});
    }

    updatePerson(newPerson: Person): Observable<any> {
        return this.httpClient.put(newPerson.link, newPerson, {headers: this.makeHeaders()});
    }

    createPerson(newPerson: Person): Observable<any> {
        return this.httpClient.post(this.CREATION_PERSON_LINK, newPerson, {headers: this.makeHeaders()});
    }

    deletePerson(person: Person): Observable<any> {
        return this.httpClient.delete(person.link, {headers: this.makeHeaders()});
    }

    private makeHeaders(): HttpHeaders {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return headers;
    }
}
