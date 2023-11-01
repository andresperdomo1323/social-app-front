import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  private url = 'http://localhost:3000/api/users'
  constructor(
    private oauthService: OAuthService,
    private http: HttpClient
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


  async signInWithGoogle() {
   await this.oauthService.loadDiscoveryDocumentAndTryLogin();
    // Obtener el token de acceso
    const accessToken = this.oauthService.getAccessToken();
    return this.http.post(`${this.url}/google`, { accessToken}).pipe(tap(response =>{
      console.log(response);
    }));
  }



}
