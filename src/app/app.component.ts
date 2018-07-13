import { Component } from '@angular/core';
import { SelectornumericoComponent} from './selectornumerico/selectornumerico.component'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selector1') selector1: SelectornumericoComponent;
  @ViewChild('selector2') selector2: SelectornumericoComponent;  

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }

}
