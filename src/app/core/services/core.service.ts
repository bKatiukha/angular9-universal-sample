import {Inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {delay, map, take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UniversalStorage} from '@shared/storage/universal.storage';
import {HttpClient} from '@angular/common/http';
import {NavigationService} from './navigation.service';

@Injectable()
export class CoreService {
  private apiUrl = environment.host;
  constructor(
    private http: HttpClient,
    @Inject(UniversalStorage) private _appStorage: Storage,
    private navigationService: NavigationService
  ) {}
  // PROFILE USER

  getTermsAndConditions() {
    return this.http.get<{data: any}>(this.apiUrl + '/agreement/getTermsAndConditions').pipe(map(res => res.data));
  }
  getUserBalance() {
    return this.http.get<{data: any}>(this.apiUrl + '/portfolio/userBalance').pipe(take(1), map(res => res.data));
  }
  // CREATE INVESTMENT
  startProcessCreateInvestment(json) {
    return this.http.post(this.apiUrl + '/investment/process/start', json);
  }
  updateUser(json) {
    return this.http.put<{data: any}>(this.apiUrl + '/profiles/user', json).pipe(take(1), map(res => res.data));
  }
}
