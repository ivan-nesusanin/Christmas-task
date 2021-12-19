import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './toys/settings/settings.component';
import { ToyComponent } from './toys/toy/toy.component';
import { ToysComponent } from './toys/toys.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { CardComponent } from './toys/toy/card/card.component';
import { FilterService } from './services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ToyComponent,
    ToysComponent,
    HomeComponent,
    TreeComponent,
    CardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
