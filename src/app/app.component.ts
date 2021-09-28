import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <textarea class="variable-textarea" [(ngModel)]="markdown"></textarea>

  <markdown class="variable-binding" [data]="markdown"></markdown>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  markdown = ``;
}
