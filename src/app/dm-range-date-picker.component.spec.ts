import { TestBed } from '@angular/core/testing';
import { DmRangeDatePickerComponent } from './dm-range-date-picker.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [DmRangeDatePickerComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DmRangeDatePickerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reports-date-picker'`, () => {
    const fixture = TestBed.createComponent(DmRangeDatePickerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reports-date-picker');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DmRangeDatePickerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('reports-date-picker app is running!');
  });
});
