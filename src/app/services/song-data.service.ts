import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Music } from '../music.model';

@Injectable({
  providedIn: 'root'
})
export class SongDataService {

  private musicList: Music[] = [];

  public songData : Subject<any> = new Subject();

  constructor() { }

  searchSongData(query: string): Music[] {
    return this.musicList.filter(music => 
      music.title.toLowerCase().includes(query.toLowerCase()) ||
      music.creator.toLowerCase().includes(query.toLowerCase())
    );
  }

}
