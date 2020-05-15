import { JSEncrypt } from 'jsencrypt';
import { Injectable } from '@angular/core';

@Injectable()
export class EncryptionBrowserService {
  private publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtqikX/my2VaeOFdPqte5\u000A
                      uR4GG3VtNl1CsqS1MthuATZ8dRH/8kifpv249SNvJR79E3W/7kVcErx7eyC3gc24\u000A
                      5wIZz90/S4JPDBrKhQg2puh7ecNcY3+5HhOVy5fxytlEazOlSFUfa9o8DGlr3CzK\u000A
                      TTmWY+IjZSw2gvVXDXgwR+P/QYNpf6lFDYcA4QSPYsDDcgGlMTzM7Z7RKgsD9ppL\u000A
                      7NSy6ytxMpNkMjydI1CfVbLVCAJqdgIDLRKRWWvWpfx8AE6rm3xMpHvnnl9wz+qG\u000A
                      l7VLEagNLuDDf0YUfnlAmtvyxFTQfrkIwIFz4fxZvztVGN0l+FvEM3fzW/kwKkLi\u000A
                      ZwIDAQAB`;

  private encrypt(str: string): string {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(this.publicKey);
    return encrypt.encrypt(str);
  }

  public encryptPassword(password: string): string {
    return this.encrypt(password);
  }

}
