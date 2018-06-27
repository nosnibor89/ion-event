import { Component, ChangeDetectionStrategy, Input, ElementRef, AfterViewInit } from '@angular/core';

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
export class ListItemComponent implements AfterViewInit {

  @Input() item: TodoItem;
  @Input() isTodo = false;

  constructor(private elemRef: ElementRef){
  }

  ngAfterViewInit(): void {
    // change the border color
    if(this.item && this.item.done){
      this.elemRef.nativeElement.classList.add('done');
    }
  }

}
