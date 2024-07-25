import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Music } from 'src/app/music.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer !: ElementRef<HTMLAudioElement>

  musicList: Music[] = [  ];

  public songCards = [
    {
      song_id : 1,
      thumbnail : '',
      title : 'Silsila',
      creator : 'Vybeey, Sadhu',
      songLink : 'assets/testing.mp3'
    },
    {
      song_id : 2,
      thumbnail : '',
      title : 'Dekha Tenu Pehli Pehli ',
      creator : ' Mahbub Islam',
      songLink : 'assets/dekhatenu.mp3'
    },
    {
      song_id : 3,
      thumbnail : '',
      title : 'Guli Mata',
      creator : 'Saad, Shreya',
      songLink : 'assets/gullimata.mp3'
    },
    {
      song_id : 4,
      thumbnail : '',
      title : 'Heeriye',
      creator : 'Arjit Singh',
      songLink : 'assets/heeriye.mp3'
    },
    {
      song_id : 5,
      thumbnail : '',
      title : 'O Mahi O Mahi',
      creator : 'Arjit Singh',
      songLink : 'assets/omahi.mp3'
    },
    {
      song_id : 6,
      thumbnail : '',
      title : 'Ram Siya Ram',
      creator : 'Parampara Thakur',
      songLink : 'assets/RamSiyaRam.mp3'
    },
    {
      song_id : 7,
      thumbnail : '',
      title : 'Sajni Re',
      creator : 'Arjit Singh',
      songLink : 'assets/sajnire.mp3'
    },
    {
      song_id : 8,
      thumbnail : '',
      title : 'Husn Tera Tauba Tauba',
      creator : 'Karan Aujla',
      songLink : 'assets/tauba.mp3'
    },
    {
      song_id : 9,
      thumbnail : '',
      title : 'Tu Hai Kahan',
      creator : 'AUR',
      songLink : 'assets/tuhaikahan.mp3'
    },
    {
      song_id : 10,
      thumbnail : '',
      title : 'Tu Maan Meri Jaan',
      creator : 'King',
      songLink : 'assets/tumaanmerijaan.mp3'
    },
  ]


  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicList = this.musicService.getMusic().slice(0, 10); // Get top 10 music
  }

  playMusic(url: string) {
    const audio = new Audio(url);
    audio.play();
  }

  likeMusic(music: Music) {
    this.musicService.likeMusic(music);
  }

}