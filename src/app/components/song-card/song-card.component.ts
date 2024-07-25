import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Music } from 'src/app/music.model';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {


  @Input() public playlistThumbnail !: string;
  @Input() public title !: string;
  @Input() public creator !: string;
  @Input() public song_id !: string | number;
  @Input() public link !: string;

  constructor(private sd : SongDataService, private router : Router) { }

  ngOnInit(): void {
  }

  onNavigateToSong(){
    // this.sd.songData.next({
      
    // })
    this.router.navigateByUrl(`/song/${this.song_id}`, {
      state : {
        thumbnail : this.playlistThumbnail,
        title : this.title,
        creator : this.creator,
        link : this.link
      }
    });
  }
  

}
