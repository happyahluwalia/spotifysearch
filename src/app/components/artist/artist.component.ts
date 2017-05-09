import { Albums } from './../../model/Albums';
import { Artist } from './../../model/Artist';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportifySearchService } from 'app/service/sportifysearch.service';

@Component({
  selector: 'ha-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private artist: Artist;
  private albums: Albums[];

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyservice: SportifySearchService) { }

  ngOnInit() {
    this.activatedRoute.params
          .map(params => params['id'])
          .subscribe(id => {
                  this.spotifyservice.searchArtist(id)
                        .subscribe(artist => {this.artist = artist; console.log(artist); });

                   this.spotifyservice.artistAlbums(id)
                       .subscribe(albums => {console.log(albums.items); this.albums = albums.items; });
          });
  }

}
