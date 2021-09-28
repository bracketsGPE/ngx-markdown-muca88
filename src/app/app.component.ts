import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <button class="btn-success" (click)="toggleMarkdown()">Compile</button>
  <button class="btn-primary" (click)="saveMarkdown()">SAVE</button>

  <div class="textWrapper" *ngIf="!showMarkdown">
    <textarea [(ngModel)]="markdown"></textarea>
  </div>

  <div *ngIf="showMarkdown" class="markdownWrapper">
    <markdown [data]="markdown"></markdown>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showMarkdown = false;
  markdown = ``;

  ngOnInit() {
    this.markdown = localStorage.getItem('markdown');
  }

  saveMarkdown() {
    localStorage.setItem('markdown', this.markdown);
  }
  toggleMarkdown() {
    if (this.showMarkdown) {
      this.showMarkdown = false;
    } else {
      this.showMarkdown = true;
    }
  }
}
