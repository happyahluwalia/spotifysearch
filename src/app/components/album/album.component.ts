import { Albums } from './../../model/Albums';
import { ActivatedRoute } from '@angular/router';
import { SportifySearchService } from 'app/service/sportifysearch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ha-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private album: Albums[];
  constructor(private sportifyService: SportifySearchService,
              private router: ActivatedRoute) { }

  ngOnInit() {
      this.router.params.map(param => param['id'])
            .subscribe(id => {
              this.sportifyService.getAlbum(id)
                  .subscribe(album => this.album = album);
            });
  }

}
