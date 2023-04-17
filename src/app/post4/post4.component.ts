import { Component } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class='post4'>
        <h2>Post4 title</h2>
        <p>Lorem jdbd dsbfjsdb djbjsbdf</p>
    </div>
  `,
  styles: [`
    .post4 {
        padding: .5rem;
        border: 2px solid green;
    }
    
    h2{
        font-size: 1rem;
        color: purple;
    }
  `]
})
export class Post4Component {

}
