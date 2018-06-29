import { NgModule } from '@angular/core';

import { ListItemComponent } from './list-item/list-item';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations: [ListItemComponent],
	imports: [PipesModule],
	exports: [ListItemComponent]
})
export class ComponentsModule {}
