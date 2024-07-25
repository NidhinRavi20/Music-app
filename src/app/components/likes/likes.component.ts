import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Music } from 'src/app/music.model';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  musicList: Music[] = [];

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicList = this.musicService.getLikedMusic();
  }

  playMusic(url: string) {
    const audio = new Audio(url);
    audio.play();
  }
}