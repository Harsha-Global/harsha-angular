import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusLabel'
})
export class StatusLabelPipe implements PipeTransform
{
  transform(value: string, ...args: unknown[]): string
  {
    if (!value)
    {
      return '';
    }

    switch (value)
    {
      case 'pending':
        return 'Pending';
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
