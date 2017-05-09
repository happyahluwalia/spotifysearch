import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class SportifySearchService  {
  private searchMusicUrl = 'https://api.spotify.com/v1/search?query= ';
  private searchArtistUrl = 'https://api.spotify.com/v1/artists/';
  private albumUrl = 'https://api.spotify.com/v1/albums/';

  constructor(private http: Http) { }

  searchMusic(str: string, type= 'artist') {
      return this.http.get(this.searchMusicUrl + str + '&type=' + type + '&&offset=0&limit=20&market=US')
            .map(res => res.json());
  }

  searchArtist(id: string) {
    return this.http.get(this.searchArtistUrl + id)
            .map(res => res.json());
  }

  artistAlbums(id: string) {
    return this.http.get(this.searchArtistUrl + id + '/albums')
            .map(res => res.json());
  }

  getAlbum(id: string) {
    return this.http.get(this.albumUrl + id )
            .map(res => res.json());
  }

}
