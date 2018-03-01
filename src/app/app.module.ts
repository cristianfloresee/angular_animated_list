import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TransitionGroupComponent, TransitionGroupItemDirective } from './transition-group/transition-group.component';


@NgModule({
  declarations: [
    AppComponent,
    TransitionGroupComponent,
    TransitionGroupComponent,
    TransitionGroupItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
