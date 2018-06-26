import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { TodoItem } from '../../models/todo-item';

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

  @Input() item: TodoItem;
}
