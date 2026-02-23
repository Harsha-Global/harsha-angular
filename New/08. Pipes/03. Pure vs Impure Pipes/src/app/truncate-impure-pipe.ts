import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateImpure',
  pure: false
})
export class TruncateImpurePipe implements PipeTransform
{
  transform(value: string, limit: number = 50): string
  {
    console.log('Impure pipe executed');
    if (!value)
      return '';

    if (value.length <= limit)
      return value;

    return value.substring(0, limit) + '...';
  }
}
