import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './toys/settings/settings.component';
import { ToyComponent } from './toys/toy/toy.component';
import { ToysComponent } from './toys/toys.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { CardComponent } from './toys/toy/card/card.component';
import { ChooseTreeComponent } from './tree/choose-tree/choose-tree.component';
import { BackgroundComponent } from './tree/background/background.component';
import { GarlandComponent } from './tree/garland/garland.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ToyComponent,
    ToysComponent,
    HomeComponent,
    TreeComponent,
    CardComponent,
    ChooseTreeComponent,
    BackgroundComponent,
    GarlandComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
