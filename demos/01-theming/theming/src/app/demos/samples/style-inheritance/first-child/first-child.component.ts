import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-child',
  template: `
    <div class="divclass">First Child</div>
      <h3>Never had a span like this</h3>
      <div class="seehowctxworks">
      <app-nested-child></app-nested-child>
    </div>
  `,
  styles: [
    `.divclass {
        border: blue 4px solid;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FirstChildComponent { }
