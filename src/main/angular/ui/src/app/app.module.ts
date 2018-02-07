import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ClickStopPropagationDirective} from "./click-stop-propagation.directive";
import {HttpService} from "./http.service";

@NgModule({
  declarations: [
    AppComponent,
    ClickStopPropagationDirective
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
