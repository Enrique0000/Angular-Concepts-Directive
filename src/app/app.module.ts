import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretNgifComponent } from './diret-ngif/diret-ngif.component';
import { DiretNgswitchComponent } from './diret-ngswitch/diret-ngswitch.component';
import { DiretNgforComponent } from './diret-ngfor/diret-ngfor.component';
import { DiretNgclassComponent } from './diret-ngclass/diret-ngclass.component';
import { DiretNgstyleComponent } from './diret-ngstyle/diret-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { DiretNgcontentComponent } from './diret-ngcontent/diret-ngcontent.component';


@NgModule({
  declarations: [
    AppComponent,
    DiretNgifComponent,
    DiretNgswitchComponent,
    DiretNgforComponent,
    DiretNgclassComponent,
    DiretNgstyleComponent,
    OperadorElvisComponent,
    DiretNgcontentComponent,
  ],
  imports: [
     BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
