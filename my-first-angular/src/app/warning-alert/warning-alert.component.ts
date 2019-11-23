import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning alert</p>
  `,
  styles: [`
    p {
      border: 1px solid darkred;
      background: red;
      color: white;
      padding: 10px;
    }
  `]
})

export class WarningAlert {

}