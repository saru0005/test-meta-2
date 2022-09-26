import {Component, OnInit, Optional} from '@angular/core';
import { MetadataService } from '../../metadata.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router, NavigationStart } from "@angular/router";
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(@Optional() private metadataService: MetadataService,
  private meta: Meta,
  private router: Router) {}

  ngOnInit(): void {
    this.meta.updateTag(
      { name: 'title', property: 'og:title', content: 'testttttttttttttttttt' },
      'name=title'
    )
    this.meta.updateTag(
      { name: 'description', property: 'og:description', content: 'this.articleSelected.short_content' },
      'name=description'
    )
    if (this.metadataService) {
      this.metadataService.updateMetadata({
        title: 'Page 1',
        description: 'There is some content on page 1'
      });
    }
  }

  page2(){ 
    this.router.navigate(["page2"])
  }

}
