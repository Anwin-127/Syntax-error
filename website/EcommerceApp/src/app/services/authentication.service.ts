import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updatePassword, updateProfile } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }

  login(username: string,password: string){
    return from(signInWithEmailAndPassword(this.auth,username,password));
  }

  signUp(name: string,email: string,password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
    switchMap(({ user }) => updateProfile(user ,{ displayName: name })));
  }
  
  

  logout(){
    return from(this.auth.signOut());
  }
}
