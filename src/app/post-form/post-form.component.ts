import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef//декораторы - метаданные, которые мы накладываем на нужные нам переменные
  //Первый парамтр декоратора вьючайлд - название ссылки, которую мы указали в шаблоне
  //Второй параметр - объект
  //Переменные, который мы получаем с помощью дек. вьючайлд имеют спец. тип ElementRef
  // Доступ до каких-то элемент с помощью вьючайлда

  titleForm = '';
  text = '';

  focusTitle() {
    console.log(this.inputRef)
    this.inputRef.nativeElement.focus() //NativeElement - DOM-элемент, 
    //у которого мы можем вызывать все необходимые нам методы
  }
}
