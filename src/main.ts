import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import routeConfig from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
  ],
}).catch((err) => console.error(err));
