import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Generated class for the ProfileItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-item',
  templateUrl: 'profile-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileItemComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileItemComponent Component');
    this.text = 'Hello World';
  }

}
