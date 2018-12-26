import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FollowingComponent } from './following/following.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouteGuard} from './auth/route-guard';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './shared/notification.service';
import {MyFireService} from './shared/myfire.service';
import {UserService} from './shared/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
import {ListUploadComponent} from './upload/list-upload/list-upload.component';
import {PostComponent} from './shared/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    FollowingComponent,
    FavoritesComponent,
    MyPostsComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    ListUploadComponent,
    PostComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule

  ],
  providers:
    [ RouteGuard,
      RouteGuard,
      NotificationService,
      MyFireService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
