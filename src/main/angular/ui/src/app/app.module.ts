import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ClickStopPropagationDirective} from "./click-stop-propagation.directive";
import {HttpService} from "./http.service";
import { CapitalizePipe } from './capitalize.pipe';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickStopPropagationDirective,
    CapitalizePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
