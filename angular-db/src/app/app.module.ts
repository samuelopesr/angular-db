import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionWorkComponent } from './section-work/section-work.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { AutenticationService } from './autentication.service';
import { PageKanbamComponent } from './pages/page-kanbam/page-kanbam.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { InitComponent } from './init/init.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeaderComponent,
    SectionWorkComponent,
    PageKanbamComponent,
    PageHomeComponent,
    PageUsersComponent,
    InitComponent,
    SectionFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCeKisWd6venV9ZWJgve9uG9fKKzf3d72s",
      authDomain: "test-26a76.firebaseapp.com",
      projectId: "test-26a76",
      storageBucket: "test-26a76.appspot.com",
      messagingSenderId: "974112200637",
      appId: "1:974112200637:web:9e9818a097d533ad8fa4d4",
      measurementId: "G-65VQTL2BX7"
    })
  ],
  providers: [AutenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
