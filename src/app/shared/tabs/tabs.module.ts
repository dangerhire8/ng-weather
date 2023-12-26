import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs.component';
import { TabHeaderDirective } from './tab-header/tab-header.directive';

@NgModule({
  declarations: [TabsComponent, TabComponent, TabHeaderDirective],
  imports: [CommonModule],
  exports: [TabsComponent, TabComponent, TabHeaderDirective],
})
export class TabsModule {}
