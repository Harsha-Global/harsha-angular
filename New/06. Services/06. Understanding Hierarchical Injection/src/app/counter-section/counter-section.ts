import { Component } from '@angular/core';
import { CounterDisplay } from '../counter-display/counter-display';
import { CounterStatus } from '../counter-status/counter-status';
import { CounterControls } from '../counter-controls/counter-controls';
import { CounterService } from '../services/counter';

@Component({
  selector: 'app-counter-section',
  imports: [CounterDisplay, CounterStatus, CounterControls],
  templateUrl: './counter-section.html',
  styleUrl: './counter-section.css',
  providers: [CounterService]
})
export class CounterSection {

}
