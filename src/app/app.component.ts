import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number; //необязательный параметр
}

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

  title10thvideo = 'Initial';
  title10thvideo2 = 'Initial';

  backgroundToggle = false;
  backgroundToggle2 = false;

  toggle: any = false; //тип any, чтобы мы могли задавать любой тип

  newArr = [1, 1, 2, 3, 5, 8, 13, 21];

  objs = [
    {
      title: 'Post 1',
      author: 'Mary',
      comments: [
        { name: 'Max', text: 'lorem 1' },
        { name: 'Max', text: 'lorem 2' },
        { name: 'Max', text: 'lorem 3' },
      ],
    },
    {
      title: 'Post 2',
      author: 'Mary2',
      comments: [
        { name: 'Max2', text: 'lorem 1' },
        { name: 'Max2', text: 'lorem 2' },
        { name: 'Max2', text: 'lorem 3' },
      ],
    },
  ];

  now: Date = new Date(); //вызываем конструтор new Date и указываем тип Date, т.к. это ts

  img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  posts: Post[] = [
    { title: 'One title', text: 'i learn components', id: 1 },
    { title: 'Two title', text: 'i learn components too', id: 2 },
  ];

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
    this.inputValue = str;
  }

  onInput2(event: any) {
    this.title10thvideo = event.target.value;
  }

  removePost(id:number){
    console.log('id to remove: ', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
