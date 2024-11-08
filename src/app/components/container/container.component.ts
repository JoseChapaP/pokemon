import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  pokemonCount: any[];

  addItem(count: any) {
    this.pokemonCount = count;
  }

}
