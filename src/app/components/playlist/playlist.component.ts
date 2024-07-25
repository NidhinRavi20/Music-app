import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Music } from 'src/app/music.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists: { name: string, music: Music[] }[] = [];
  newPlaylistName: string = '';

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.playlists = this.musicService.getPlaylists();
  }

  createPlaylist() {
    if (this.newPlaylistName) {
      this.musicService.createPlaylist(this.newPlaylistName);
      this.newPlaylistName = '';
    }
  }

  addMusicToPlaylist(playlistName: string, music: Music) {
    this.musicService.addMusicToPlaylist(playlistName, music);
  }

  playMusic(url: string) {
    const audio = new Audio(url);
    audio.play();
  }
}