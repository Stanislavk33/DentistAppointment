import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrimaryTestComponent } from './shared/primary_test/primary_test.component';
import { PrimaryTestService } from "./shared/primary_test/services/primary_test.service";
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "clarity-angular";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./shared/app/app.component";

@NgModule({
  declarations: [
    AppComponent,
    PrimaryTestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    ClarityModule
  ],
  providers: [
    PrimaryTestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
