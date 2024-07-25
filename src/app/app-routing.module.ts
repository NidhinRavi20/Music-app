import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top10Component } from './components/top10/top10.component';
import { LikesComponent } from './components/likes/likes.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { SongComponent } from './components/song/song.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  // { path: 'login', component: LoginComponent},
  { path: 'top10', component: Top10Component, canActivate: [AuthGuard] },
  { path: 'likes', component: LikesComponent, canActivate: [AuthGuard]  },
  { path: 'tracks', component: TracksComponent, canActivate: [AuthGuard]  },
  { path: 'playlist', component: PlaylistComponent, canActivate: [AuthGuard]  },
  { path: 'add-music', component: AddMusicComponent, canActivate: [AuthGuard]  },
  { path: 'song/:id', component: SongComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }