import { TitleCasePipe } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ab-datepicker-tab',
  standalone: true,
  template: `{{ label ?? '' | translate | titlecase }}`,
  styles: [
    `
      :host {
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0.75rem;
        min-width: 10ch;

        color: inherit;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.25rem;
        border: 1px solid transparent;

        transition:
          box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1),
          transform 0.1s cubic-bezier(0.2, 0, 0, 1);
      }

      :host.selected {
        background-color: white;
        border: 1px solid var(--ab-gray-dark);
      }

      :host:hover:not(.selected) {
        background-color: var(--ab-gray-dark);
        cursor: pointer;
      }
    `
  ],
  imports: [TranslateModule, TitleCasePipe]
})
export class AbDatepickerTabComponent {
  @Input()
  label?: string;

  @HostBinding('class.selected')
  @Input()
  selected?: boolean;
}
