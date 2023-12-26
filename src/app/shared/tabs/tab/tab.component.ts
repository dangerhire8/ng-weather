import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() tabTitle: string;
  @ViewChild('header') headerRef: TemplateRef<any>;

  private _active = signal(false);

  get active() {
    return this._active();
  }
  set active(value: boolean) {
    this._active.set(value);
  }
}
