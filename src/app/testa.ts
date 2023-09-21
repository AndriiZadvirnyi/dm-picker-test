import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'testa',
  template: ``,
  standalone: true,
})
export class Testa implements OnInit {
  //expected format is timestamp
  @Input()
  startDate?: number | string;

  @Input()
  endDate?: number | string;

  @Input()
  label: string = 'Enter a date range';

  @Input()
  startDatePlaceholder: string = 'Start date';

  @Input()
  endDatePlaceholder: string = 'End date';

  formGroup!: FormGroup;

  @Output() dateRangeChanged = new EventEmitter<{ startDate: Date, endDate: Date }>();

  ngOnInit(): void {
    this.formGroup = new FormGroup(
      {
        startDate: new FormControl(this.parseDate(this.startDate)),
        endDate: new FormControl(this.parseDate(this.endDate)),
      }
    )
    this.formGroup.valueChanges.subscribe(data => this.onDateRangeChanged(data));
  }

  onDateRangeChanged(formValue: { startDate: Date, endDate: Date }): void {
    this.dateRangeChanged.emit({startDate: formValue.startDate, endDate: formValue.endDate});
  }

  private parseDate(date: number | string | undefined): Date | null {
    return date ? new Date(+date * 1000) : null;
  }
}
