import { bootstrapApplication } from '@angular/platform-browser';
import {DmRangeDatePickerComponent} from './app/dm-range-date-picker.component';
import { provideAnimations } from '@angular/platform-browser/animations'

bootstrapApplication(DmRangeDatePickerComponent, {
    providers: [provideAnimations()]
});
