import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-just-post',
  templateUrl: './just-post.component.html',
  styleUrls: ['./just-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None //Делаем стиль глобальным, 
  //то есть применится не только к заголовкам h3 в текущем компоненте, но и к остальным
})
export class JustPostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  posts: Post[] = [
    { title: 'One title', text: 'i learn components', id: 1 },
    { title: 'Two title', text: 'i learn components too', id: 2 },
  ];

  
  @Input('myPost') post: Post;
  //в input можем передавать название ожидаемого параметра - строку
  //если в input ничего не передае, то Ангуляр будет ожидать параметр с названием post,
  //но если есть строка, то будем ждать параметр с названием строки,
  //но значение будем заносить в переменную post => в шаблоне ничего не меняем

  @Output() onRemove = new EventEmitter<number>(); //для удаления поста, будет передавать айдишник поста -> number

  @ContentChild('info', { static: true }) infoRef: ElementRef; //static: true - т.к. доступ будем получать в методе ngOnInit

  //Первый эатп формирования коимпоненты -  конструктор, но делать в нем какую-то логику не рекомендуется (лучше в ngOnInit)
  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        title: 'changed',
        text: 'changed 2',
        id: 33,
      };
    }, 5000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //: void - ничего не возвращаем из этого метода
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit'); //инициализируем контент
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked'); //когда весь контент готов
  }

  ngAfterViewInit(): void {
    //инициализиурем вью - элементы, который присутствуют в нашем компоненте (из шаблона)
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  removePost() {
    this.onRemove.emit(this.post.id);
  }
}
