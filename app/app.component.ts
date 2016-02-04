import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:`
              <h1>{{title}}</h1>
              <h2>{{beer.name}} details!</h2>
              <div><label>id: </label>{{beer.id}}</div>
              <div>
                <label>name: </label>
                <div><input [(ngModel)]="beer.name" placeholder="name"></div>
              </div>
            `
})

export class AppComponent {
  public title = 'Kegalytics v2';
  public beer: Beer = {
  id: 1,
  name: 'Red Chair NWPA'
};
}

interface Beer {
  id: number;
  name: string;
  rating: number;
}