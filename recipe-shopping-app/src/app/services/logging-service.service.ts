import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // For Angular 6+ : If used this, then do not need to use provided[] inside @Component
})
export class LoggingServiceService {

  constructor() { }

  logInfo(message: string) {
    console.log("INFO:" + message);
  }
}
