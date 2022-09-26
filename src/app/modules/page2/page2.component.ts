import {Component, OnInit, Optional} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {MetadataService} from '../../metadata.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(@Optional() private metadataService: MetadataService,
  private meta: Meta,) { }

  ngOnInit(): void {
    this.meta.updateTag(
      { name: 'title', property: 'og:title', content: 'dsdaddsadasdadadasd' },
      'name=title'
    )
    this.meta.updateTag(
      { name: 'description', property: 'og:description', content: 'dddddddddsssssssss' },
      'name=description'
    )
    if (this.metadataService) {
      console.log("chefck")
      this.metadataService.updateMetadata({
        title: 'Page 2',
        description: 'There is some content on page 2'
      });
    }
  }

}
