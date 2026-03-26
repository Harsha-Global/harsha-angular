import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityLabel'
})
export class PriorityLabelPipe implements PipeTransform
{
  transform(value: string, ...args: unknown[]): string
  {
    if (!value)
    {
      return '';
    }
    
    switch (value)
    {
      case 'low':
        return 'Low Priority';
      case 'medium':
        return 'Medium Priority';
      case 'high':
        return 'High Priorty!';
      case 'urgent':
        return 'Urgent!!';
      default:
        return value.charAt(0).toUpperCase() + value.slice(1) + 'Priority';
    }
  }
}
