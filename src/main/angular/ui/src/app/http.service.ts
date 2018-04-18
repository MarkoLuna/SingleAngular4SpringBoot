import { Injectable } from '@angular/core';
import { Person } from './Person'
import { Observable } from 'rxjs/Observable';
import { Response, Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {

    private CREATION_PERSON_LINK = 'http://localhost:8080/people';

    constructor(private http: Http) { }

    me(): Observable<Response> {
        return this.http.get('/me', this.makeOptions())
    }

    logout(): Observable<Response> {
        return this.http.post('/logout', '', this.makeOptions())
    }

    getPeople(): Observable<Response> {
        return this.http.get('/people', this.makeOptions())
    }

    updatePerson(newPerson: Person): Observable<Response> {
        return this.http.put(newPerson.link, newPerson, this.makeOptions())
    }

    createPerson(newPerson: Person): Observable<Response> {
        return this.http.post(this.CREATION_PERSON_LINK, newPerson, this.makeOptions())
    }

    deletePerson(person: Person): Observable<Response> {
        return this.http.delete(person.link, this.makeOptions())
    }

    private makeOptions(): RequestOptions {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}
