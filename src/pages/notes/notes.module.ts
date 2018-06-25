import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesPage } from './notes';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [
    NotesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesPage),
    ComponentsModule,
  ],
})
export class NotesPageModule {}
