import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionWorkComponent } from './section-work/section-work.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { PageKanbamComponent } from './pages/page-kanbam/page-kanbam.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageUsersComponent } from './pages/page-users/page-users.component';
import { InitComponent } from './init/init.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';
import { AutenticationService } from './autentication.service';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { PageOutComponent } from './pages/page-out/page-out.component';
import { SectionTaskComponent } from './pages/page-kanbam/section-task/section-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SectionTaskDialogComponent } from './pages/page-kanbam/section-task-dialog/section-task-dialog.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { CreateUserComponent } from './pages/create-user/create-user.component'
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { ContatoDataService } from './shared/contato-data.service';
import { ContatoService } from './shared/contato.service';


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
    EditComponent,
    ListComponent,
    PageOutComponent,
    SectionTaskComponent,
    SectionTaskDialogComponent,
    CreateUserComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    DragDropModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAo4ny7y7BThQeC4_2o3nQi5dbaXmOTj_g",
      authDomain: "unimed-3c722.firebaseapp.com",
      databaseURL: "https://unimed-3c722-default-rtdb.firebaseio.com",
      projectId: "unimed-3c722",
      storageBucket: "unimed-3c722.appspot.com",
      messagingSenderId: "110678222634",
      appId: "1:110678222634:web:2c8100e2d252e1808e6053",
      measurementId: "G-7YREJKBEY8" 
    }),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
  ],
  providers: [AutenticationService, ContatoDataService, ContatoService],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
