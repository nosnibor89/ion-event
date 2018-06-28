import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosPage } from './todos';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [
    TodosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosPage),
    ComponentsModule,
  ],
})
export class TodosPageModule {}
