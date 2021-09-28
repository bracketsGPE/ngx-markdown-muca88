import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <textarea class="variable-textarea" [(ngModel)]="markdown"></textarea>

  <markdown class="variable-binding" [data]="markdown"></markdown>

  <button class="btn-primary" (click)="saveMarkdown()">SAVE</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  markdown = ``;

  ngOnInit() {
    localStorage.getItem('markdown');
  }

  saveMarkdown() {
    localStorage.setItem('markdown', this.markdown);
  }
}
