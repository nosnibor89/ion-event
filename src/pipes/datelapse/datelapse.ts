import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

/**
 * Generated class for the DatelapsePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'datelapse',
})
export class DatelapsePipe implements PipeTransform {
  /**
   * Transform datetime into lapse by comparing with current time
   * @param value string A string representation of the date
   */
  transform(value: string, ...args) {
    const date = DateTime.fromJSDate(new Date(value));
    const diff = DateTime.local().diff(date, ['minutes', 'hours', 'days']);

    if (diff.minutes < 1) {
      return 'Just now';
    }

    if (diff.hours < 1) {
      return `${diff.minutes.toFixed(0)} minutes ago`;
    }

    if (diff.days < 1) {
      return `${diff.hours.toFixed(0)} hours ago`;
    }

    return `${diff.days.toFixed(0)} days ago`;
  }
}
