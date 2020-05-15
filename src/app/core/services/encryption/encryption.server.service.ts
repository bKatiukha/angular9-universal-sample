import { Injectable } from '@angular/core';

@Injectable()
export class EncryptionServerService {
  public encryptPassword(password: string): string {
    return password;
  }
}
