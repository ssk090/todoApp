import { Component } from '@angular/core';
import { GetApiService } from './get-api.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h4 style=color:blue>hello from template</h4>
  // `
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'test';
  data: any;

  constructor(private api: GetApiService) { }

  number = 1;

  change() {
    this.title = "Hello WOlrd"
  }

  reset() {
    this.title = "test"
  }

  up() {
    this.number++;
  }
  down() {
    this.number--;
  }

  ngOnInit() {
    this.api.apiCall().subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }


}
