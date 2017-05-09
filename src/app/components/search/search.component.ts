import { Artist } from './../../model/Artist';
import { SportifySearchService } from './../../service/sportifysearch.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'ha-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private search: string;
  private searchRes: Artist[];
  private searchTerm = new Subject<string>();
  items: Observable<any[]>;

  constructor(private spotifyservice: SportifySearchService) {
  }

  ngOnInit() {
    this.searchTerm.debounceTime(500)
        .distinctUntilChanged()
        .subscribe((query1: string) => {
            console.log(query1);
            this.spotifyservice.searchMusic(query1)
                    .subscribe(res => this.searchRes = res.artists.items );
          });
  }

 Search(query: string) {
    this.searchTerm.next(query);
 }
}
