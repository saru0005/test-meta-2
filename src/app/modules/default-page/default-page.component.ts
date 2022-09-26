import { Component, OnInit, Optional } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetadataService } from '../../metadata.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {
  pageTitle = 'This is Universal Page';
  constructor(private title: Title,
    private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag(
      { name: 'description', content: 'This is universal desciption here!' }
    );
  }

}
