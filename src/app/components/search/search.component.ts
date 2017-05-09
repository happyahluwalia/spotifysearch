import { Artist } from './../../model/Artist';
import { SportifySearchService } from './../../service/sportifysearch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ha-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private search: string;
  private searchRes: Artist[];
  constructor(private spotifyservice: SportifySearchService) { }

  ngOnInit() {
  }

 Search(query: string) {
    this.spotifyservice.searchMusic(query)
          .subscribe(res => this.searchRes = res.artists.items );
 }
}
