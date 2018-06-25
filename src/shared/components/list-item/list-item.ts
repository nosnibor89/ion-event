import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Generated class for the ListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {

  text: string;

  constructor() {
    console.log('Hello ListItemComponent Component');
    this.text = 'Hello World';
  }

}
