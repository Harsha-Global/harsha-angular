import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform
{
  transform(value: string, limit: number = 50): string
  {
    console.log('Pure pipe executed');
    if (!value)
      return '';

    if (value.length <= limit)
      return value;

    return value.substring(0, limit) + '...';
  }
}
