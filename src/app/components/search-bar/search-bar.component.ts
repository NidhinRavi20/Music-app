import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Music } from 'src/app/music.model';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  query: string = '';
  searchResults: Music[] = [];
 

  constructor(private musicService: MusicService, private sd : SongDataService) { }

  onSearch() {
    this.searchResults = this.musicService.searchMusic(this.query);
    
  }

  playMusic(url: string) {
    const audio = new Audio(url);
    audio.play();
  }

}
