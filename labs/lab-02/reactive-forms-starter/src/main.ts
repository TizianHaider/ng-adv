
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));