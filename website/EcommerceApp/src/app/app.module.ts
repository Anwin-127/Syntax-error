import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetStartedComponent,
    CartComponent,
    LoginPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp({"projectId":"e-commerce-b8b1a","appId":"1:976418975969:web:5bdfa7ebc817d33b4047a0","storageBucket":"e-commerce-b8b1a.appspot.com","apiKey":"AIzaSyAfW7hVVSYI8jM_ULGaz4dek1xS09wpwB4","authDomain":"e-commerce-b8b1a.firebaseapp.com","messagingSenderId":"976418975969","measurementId":"G-WDSZDESP47"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
