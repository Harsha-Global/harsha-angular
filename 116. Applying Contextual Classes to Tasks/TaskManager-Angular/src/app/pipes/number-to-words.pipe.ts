import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform
{
  transform(value: any, separator: string = ", "): any
  {
    if (value == null)
    {
      return null;
    }
    else
    {
      return this.inWords(value, separator);
    }
  }

  private inWords = (n, separator) =>
  {
    let a = [
      '', 'One', 'Two', 'Three', 'Four',
      'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
      'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];

    let b = [
      '', '', 'Twenty', 'Thirty', 'Forty',
      'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

    let g = [
      '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion',
      'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'
    ];

    const arr = x => Array.from(x);
    const num = x => Number(x) || 0;
    const str = x => String(x);
    const isEmpty = xs => xs.length === 0;
    const take = n => xs => xs.slice(0, n);
    const drop = n => xs => xs.slice(n);
    const reverse = xs => xs.slice(0).reverse();
    const comp = f => g => x => f(g(x));
    const not = x => !x;
    const chunk = n => xs =>
      isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

    let makeGroup = ([ones, tens, huns]) =>
    {
      return [
        num(huns) === 0 ? '' : a[huns] + ' Hundred ',
        num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
        a[tens + ones] || a[ones]
      ].join('');
    };

    let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;

    if (typeof n === 'number')
      return this.inWords(str(n), separator);
    else if (n === '0')
      return 'Zero';
    else
      return comp(chunk(3))(reverse)(arr(n))
        .map(makeGroup)
        .map(thousand)
        .filter(comp(not)(isEmpty))
        .reverse()
        .join(separator);
  }
}
