import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { StartComponent } from './components/start/start.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UiHeaderComponent,
    StartComponent,
    UiFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
