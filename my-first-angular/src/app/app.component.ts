import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'] this is for external referencing and u can reference multiple style files
  styles: [`
    h3{
      color: red; 
    }

    h3{
      color: blue;
    }
  `] // this is for inline styling
})
export class AppComponent {
}
