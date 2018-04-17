import { Person } from './Person';
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Principal} from './principal';
import {Response} from '@angular/http';
import {HttpService} from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    principal: Principal = new Principal(false, [], '');
    loginFailed: Boolean = false;
    people: Person[] = null;

    constructor(private httpService: HttpService) { }

    ngOnInit(): void {
        this.loadMyInformation();
        this.loadPeople();
    }

    loadPeople() {
        this.httpService.getPeople()
            .subscribe((response: Response) => {
                const principalJson = response.json();
                this.people = principalJson._embedded.people;

                for (let i = 0; i < principalJson._embedded.people.length; i++) {
                    this.people[i].link = principalJson._embedded.people[i]._links.person.href;
                }

                console.log(principalJson);
                console.log(this.people);
            }, (error) => {
                console.log(error);
            });
    }

    createPerson(person: Person) {
        this.httpService.createPerson(person)
            .subscribe((response: Response) => {
                const principalJson = response.json();
                console.log(principalJson);
                // refresh People
                this.loadPeople();
            }, (error) => {
                console.log(error);
            });
    }

    updatePerson(person: Person) {
        this.httpService.updatePerson(person)
            .subscribe((response: Response) => {
                const principalJson = response.json();
                console.log(principalJson);
                // refresh People
                this.loadPeople();
            }, (error) => {
                console.log(error);
            });
    }

    deletePerson(person: Person) {
        this.httpService.deletePerson(person)
            .subscribe((response: Response) => {
                const principalJson = response.json();
                console.log(principalJson);
                // refresh People
                this.loadPeople();
            }, (error) => {
                console.log(error);
            });
    }

    loadMyInformation() {
        this.httpService.me()
            .subscribe((response: Response) => {
                const principalJson = response.json();
                this.principal = new Principal(principalJson.authenticated, principalJson.authorities, principalJson.principal.username);
            }, (error) => {
                console.log(error);
            });
    }

    onLogout() {
        this.httpService.logout()
            .subscribe((response: Response) => {
                if (response.status === 200) {
                    this.loginFailed = false;
                    this.principal = new Principal(false, [], '');
                    window.location.replace(response.url);
                }
            }, (error) => {
                console.log(error);
            });
    }

}
