import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [AppComponent, OverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
