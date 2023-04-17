import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];

  obj = { a: 1, b: { c: 2 } };

  inputValue = '';

  img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png';
    }, 5000);
  }

  onInput(event: Event) {
    //console.log("Event", event)
    const customEvent = event as KeyboardEvent;
    this.inputValue = (<HTMLInputElement>customEvent.target).value;
  }

  onClick() {
    console.log('Click!');
  }

  onBlur(str: string) {
    this.inputValue = str
  }
}
