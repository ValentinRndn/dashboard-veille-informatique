import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/shared/component/app.config';
import { AppComponent } from './app/shared/component/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));