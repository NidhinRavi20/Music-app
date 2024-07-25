import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Music } from 'src/app/music.model';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent {
  music: Music = {
    // thumbnail: '',
    id: 0,
    name: '',
    creator: '',
    likes: 0,
    url: '',
    title : ''
  };

  constructor(private musicService: MusicService) { }

  addMusic() {
    if (this.music.name && this.music.creator && this.music.url) {
      this.music.id = this.musicService.getMusic().length + 1;
      this.musicService.addMusic(this.music);
      this.music = { id: 0, name: '', creator: '', likes: 0, url: '' , title: ''}; // Reset form
    }
  }
}