import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { DashboardState } from '../../shared/store/dashboard/dashboard.state';
import { MainPage } from '../../shared/main-page';
import { TodoItem } from '../../shared/models/todo-item';
import { DateTime } from 'luxon';
import { fetchTodos } from '../../shared/store/todo/todo.actions';
import { fetchNotes } from '../../shared/store/note/note.actions';



/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage extends MainPage {

  public lapses: string[] = ['Year', 'Month', 'Today'];
  public itemsByLapse: number[] = [350, 450, 100];
  public chartType: string = 'doughnut';

  subscription: Subscription;
  @Select(DashboardState.summary) summary$: Observable<any>;

  constructor(public navCtrl: NavController, public store: Store) {
    super(navCtrl, store);
  }

  ionViewDidEnter() {
    this.subscription = this.store.select(state => state.todo).subscribe((state) => {
      this.getLapses(state.todos);
    });
  }

  ionViewWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getLapses(todos: TodoItem[]) {
    const now = DateTime.local();
    const currentYear = now.get('year');
    const todosThisMonth = todos.filter(todo => DateTime.fromJSDate(new Date(todo.createdAt)).get('year') === currentYear)

    let byToday = 0
    let byMonth = 0
    let byYear = 0;

    for (const todo of todosThisMonth) {
      const date = DateTime.fromJSDate(new Date(todo.createdAt));

      if (date.year === now.year) {
        byYear++
      }

      if (date.year === now.year && date.month === now.month) {
        byMonth++
      }

      if (date.year === now.year && date.month === now.month && date.day === now.day) {
        byToday++
      }
    }

    this.itemsByLapse = [byYear, byMonth, byToday]
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  refresh() {
    // fetch data
    this.store.dispatch([
      new fetchTodos(),
      new fetchNotes(),
    ]);
  }
}
