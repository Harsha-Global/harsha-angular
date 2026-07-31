import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-application-summary',
  imports: [],
  templateUrl: './application-summary.html',
  styleUrl: './application-summary.css',
})
export class ApplicationSummary implements OnChanges, DoCheck
{
  @Input() totalCount: number = 0;
  @Input() filteredCount: number = 0;

  ngOnChanges(changes: SimpleChanges): void
  {
    console.log('Changes detected: ', changes);

    if (changes['filteredCount'])
    {
      const currentCount: number = changes['filteredCount'].currentValue;
      if (currentCount == 0)
      {
        console.warn('Filter returned zero applications');
      }
    }
  }

  ngDoCheck(): void
  {
    console.log('Application Summary - Do check fired');
  }
}
