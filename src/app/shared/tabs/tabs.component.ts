import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList,
  inject,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentChecked {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  private isFirstLoad = true;
  private cdr = inject(ChangeDetectorRef);

  ngAfterContentChecked() {
    this.preselectActiveTabOnFirstLoad();
    this.cdr.markForCheck();
  }

  selectTab(tab: TabComponent, event?: MouseEvent) {
    //avoid selecting tab when clicking in a button inside app-tab-header ng-content
    if (event?.target && event.target instanceof HTMLButtonElement) {
      return;
    }

    this.tabs.toArray().forEach((t) => (t.active = t === tab));
  }

  private preselectActiveTabOnFirstLoad() {
    if (this.isFirstLoad && this.tabs.length > 0) {
      const activeTab =
        this.tabs.toArray().find((tab) => tab.active) ?? this.tabs.first;

      this.selectTab(activeTab);
      this.isFirstLoad = false;
    }
  }
}
