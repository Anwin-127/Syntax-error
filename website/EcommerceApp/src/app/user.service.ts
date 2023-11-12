import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  private username = new BehaviorSubject<string>('');  // Default value is an empty string
  currentName = this.username.asObservable();

  changeName(newName: string) {
    this.username.next(newName);
  }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
      this.db.collection('users').valueChanges().subscribe(users => resolve(users));
    })
}

addNewUser(email:string, productL : any) {
  this.db.collection("users").doc(email).set({products : productL});
}

updateUserProductList(email:string , productL:any) {
  this.db.collection("users").doc(email).update({products: productL});
}

getCollectionData(): Observable<any[]> {
  return this.db.collection("users").valueChanges();
}



}
