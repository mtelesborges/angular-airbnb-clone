import { Directive, HostBinding } from '@angular/core';

@Directive()
export abstract class AbBaseComponent {
  @HostBinding('class.ab-base')
  private abBaseClass: boolean = true;
}
