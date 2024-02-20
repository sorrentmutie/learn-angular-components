import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './shared/my-button/my-button.component';
import { MyCardComponent } from './shared/my-card/my-card.component';
import { NoEncapsulationComponent } from './shared/no-encapsulation/no-encapsulation.component';
import { EmulatedComponent } from './shared/emulated/emulated.component';
import { ShadowComponent } from './shared/shadow/shadow.component';
import { MyMapComponent } from './shared/my-map/my-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyCardComponent,
    NoEncapsulationComponent,
    EmulatedComponent,
    ShadowComponent,
    MyMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
