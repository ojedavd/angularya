import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    CronometroComponent,
    SelectornumericoComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
