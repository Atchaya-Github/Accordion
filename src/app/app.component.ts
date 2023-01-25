import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new';
  selectedData = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6 }];
}
