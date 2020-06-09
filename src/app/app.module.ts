import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StorageService } from './services/storage.service';
import { SectionComponent } from './components/section/section.component';
import { HomeComponent } from './components/section/home/home.component';
import { AboutComponent } from './components/section/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        SectionComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers : [StorageService],
    bootstrap : [AppComponent]
})

export class AppModule { }
