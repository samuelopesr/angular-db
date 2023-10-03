import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth'


@Injectable({
  providedIn: 'root',
})
export class AutenticationService {
  user: any;
  error: any;

  constructor(public autentication: AngularFireAuth) {

  }

    async emailSignIn(email:string, password:string) {
      try
      { 

        const credential = this.autentication.signInWithEmailAndPassword(email, password)
        this.user = (await credential).user


      } catch (error)
      {
          this.error = error;
      }

    }

    async googleProvider()  {
      try {
        const provider = new GoogleAuthProvider()
        const credential = await this.autentication.signInWithPopup(provider)
        this.user = credential.user
      } catch (error)
      {
        this.error = error
      }
    }

    async signOut(){
      await this.autentication.signOut();
      this.user = null;
      }

      
    
  }

