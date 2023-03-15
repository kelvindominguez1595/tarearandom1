import { Component, OnInit } from '@angular/core';
import { Colors } from './models';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {

  colors: Colors[] = [];

  constructor() {
    this.colors = [
      {uuid: 1, name: 'gold', code: '#FFD700', isCheck: false},
      {uuid: 2, name: 'gray', code: '#808080', isCheck: false},
      {uuid: 3, name: 'green', code: '#008000', isCheck: false},
      {uuid: 4, name: 'blueviolet', code: '#8A2BE2', isCheck: false},
      {uuid: 5, name: 'brown', code: '#A52A2A', isCheck: false},
      {uuid: 6, name: 'red', code: '#FF0000', isCheck: false},
    ]
  }

  ngOnInit() {
  }


  checkEvent(uuid:number) {
    this.colors.map(obj => {
      if(obj.uuid === uuid){obj.isCheck = true;}
      return obj;
    });
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

}
