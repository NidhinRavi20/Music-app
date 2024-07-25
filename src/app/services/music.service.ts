import { Injectable } from '@angular/core';
import { Music } from '../music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private musicList: Music[] = [];
  private likedMusic: Music[] = [];
  private playlists: { name: string, music: Music[] }[] = [];

  constructor() { }

  getMusic(): Music[] {
    return this.musicList;
  }

  addMusic(music: Music) {
    this.musicList.push(music);
  }

  likeMusic(music: Music) {
    if (!this.likedMusic.includes(music)) {
      this.likedMusic.push(music);
    }
  }

  getLikedMusic(): Music[] {
    return this.likedMusic;
  }

  createPlaylist(name: string) {
    this.playlists.push({ name, music: [] });
  }

  getPlaylists() {
    return this.playlists;
  }

  addMusicToPlaylist(playlistName: string, music: Music) {
    const playlist = this.playlists.find(p => p.name === playlistName);
    if (playlist && !playlist.music.includes(music)) {
      playlist.music.push(music);
    }
  }

  searchMusic(query: string): Music[] {
    return this.musicList.filter(music => 
      music.name.toLowerCase().includes(query.toLowerCase()) ||
      music.creator.toLowerCase().includes(query.toLowerCase())
    );
  }
}