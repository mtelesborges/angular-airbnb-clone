import { Component, Input } from '@angular/core';

import { AbDatepickerTabComponent } from './datepicker-tab.component';

@Component({
  selector: 'ab-datepicker-tab-group',
  standalone: true,
  template: `
    @for (tab of tabs; track $index) {
      <ab-datepicker-tab [label]="tab.label" [selected]="tab.selected" (click)="click($index)" />
    }
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: 1em;
        background-color: var(--ab-gray-light);
        border-radius: 100px;
        padding: 0.25em;
        width: fit-content;
        color: inherit;
      }
    `
  ],
  imports: [AbDatepickerTabComponent]
})
export class AbDatepickerTabGroupComponent {
  @Input()
  tabs?: { label: string; selected?: boolean }[];

  click(index: number) {
    this.tabs = this.tabs?.map((tab, tabIndex) => ({ ...tab, selected: tabIndex === index }));
  }
}
