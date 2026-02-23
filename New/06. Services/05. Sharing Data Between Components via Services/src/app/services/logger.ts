import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService
{
  instanceId: number;

  constructor()
  {
    this.instanceId = Math.floor(Math.random() * 1000);
    console.log(`LoggerService instance created with ID: ${this.instanceId}`);
  }

  getInstanceId(): number
  {
    return this.instanceId;
  }

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
    console.warn(`[${this.getTimestamp()}] [WARN] ${message}`);
  }

  error(message: string): void
  {
    console.error(`[${this.getTimestamp()}] [ERROR] ${message}`);
  }
}
