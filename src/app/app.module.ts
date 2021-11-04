import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapQuestStaticComponent } from './components/mapquest-static.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MapQuestStaticComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
