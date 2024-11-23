import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigGuard implements CanActivate {
  constructor(private configService: ConfigService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.configService.loadConfig().pipe(
      map(() => true)
    );
  }
}
