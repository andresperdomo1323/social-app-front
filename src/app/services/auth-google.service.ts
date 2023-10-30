import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(
    private oauthService: OAuthService
  ) {
    this.initlogin();
  }

  initlogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '142292870308-n7n2ltn2ecposnjrqldbfocc3diom93a.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/menu/publications',
      scope: 'openid profile email',
    };
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    this.oauthService.initLoginFlow();
  }

  logout(){
    this.oauthService.logOut();
  }

  getProfile(){
    return this.oauthService.getIdentityClaims();
  }

  registerUser(){
    const claims = this.getProfile();
    console.log(claims);
  }

  


}
