import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Config } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private static config: Config;

  constructor(private http: HttpClient) { }

  loadConfig(): Observable<any> {
    return this.http.get('/assets/json/config.json').pipe(
      tap(config => ConfigService.config = config)
    );
  }

  static getConfig(): Config {
    return ConfigService.config;
  }
}
