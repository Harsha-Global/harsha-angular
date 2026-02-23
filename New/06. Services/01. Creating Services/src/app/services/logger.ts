import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService
{
  private getTimestamp(): string
  {
    return new Date().toLocaleTimeString();
  }

  log(message: string): void
  {
    console.log(`[${this.getTimestamp()}] [LOG] ${message}`);
  }

  warn(message: string): void
  {
    console.log(`[${this.getTimestamp()}] [WARN] ${message}`);
  }

  error(message: string): void
  {
    console.log(`[${this.getTimestamp()}] [ERROR] ${message}`);
  }
}
