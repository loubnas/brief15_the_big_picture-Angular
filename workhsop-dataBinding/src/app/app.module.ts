import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyComponent } from './components/property/property.component';
import { EventComponent } from './components/event/event.component';
import { ViewChildToWayComponent } from './components/view-child-to-way/view-child-to-way.component';
import { ViewChildChildComponent } from './components/view-child-child/view-child-child.component';
import { InputChildComponent } from './components/input-child/input-child.component';
import { InputParentComponent } from './components/input-parent/input-parent.component';
import { OutputParentComponent } from './components/output-parent/output-parent.component';
import { OutputChildComponent } from './components/output-child/output-child.component';
import { ContentChildParentComponent } from './components/content-child-parent/content-child-parent.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    ViewChildToWayComponent,
    ViewChildChildComponent,
    InputChildComponent,
    InputParentComponent,
    OutputParentComponent,
    OutputChildComponent,
    ContentChildParentComponent,
    ContentChildComponent,
    NgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
