import { Component } from '@angular/core';

import { AbDatepickerTabGroupComponent } from './components';
import { AbBaseComponent } from '../base.component';

@Component({
  selector: 'ab-datepicker',
  standalone: true,
  imports: [AbDatepickerTabGroupComponent],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class AbDatepickerComponent extends AbBaseComponent {
  tabs = [{ label: 'dates', selected: true }, { label: 'months' }, { label: 'flexible' }];
}
