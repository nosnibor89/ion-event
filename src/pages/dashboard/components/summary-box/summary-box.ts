import { Component, Input } from '@angular/core';

/**
 * Generated class for the SummaryBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'summary-box',
  template: `
  <div>
      <ion-icon [name]="iconName"></ion-icon>
      <span>{{text}}</span>
      <span>{{total}}</span>
  </div>
`,
})
export class SummaryBoxComponent {
  @Input() iconName: String;
  @Input() text: String;
  @Input() total: String;
  @Input() color: String;
}
