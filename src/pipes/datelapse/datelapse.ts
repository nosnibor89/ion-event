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
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    const date = DateTime.fromJSDate(new Date(value));

    console.log(date.toString())
    console.log(DateTime.local().toString())
    const diff = DateTime.local().diff(date, ['minutes', 'hours', 'days']);
    // const diff = date.diffNow(,);
    // debugger
    if(diff.minutes < 1){
      return 'Just now';
    }

    if(diff.hours < 1){
      return `${diff.minutes} minutes ago`;
    }

    if(diff.days < 1){
      return `${diff.hours} hours ago`;
    }

    return `${diff.days} days ago`;
  }
}
