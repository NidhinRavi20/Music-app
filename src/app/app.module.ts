import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Top10Component } from './components/top10/top10.component';
import { LikesComponent } from './components/likes/likes.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { FormsModule } from '@angular/forms';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SongComponent } from './components/song/song.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    Top10Component,
    LikesComponent,
    TracksComponent,
    PlaylistComponent,
    AddMusicComponent,
    SongCardComponent,
    SongComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
