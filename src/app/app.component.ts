import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <button class="btn-primary" (click)="toggleMarkdown()">Compile</button>

  <div *ngIf="!showMarkdown">
    <textarea class="variable-textarea" [(ngModel)]="markdown"></textarea>
    <button class="btn-primary" (click)="saveMarkdown()">SAVE</button>
  </div>

  <markdown *ngIf="showMarkdown" class="variable-binding" [data]="markdown"></markdown>
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
