import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform
{
  transform(value: any): any
  {
    if (value == null)
    {
      return null;
    }
    else
    {
      return this.inWords(value);
    }
  }

  private inWords = (n: any) : any =>
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

    const arr = (x: any) => Array.from(x);
    const num = (x: any) => Number(x) || 0;
    const str = (x: any) => String(x);
    const isEmpty = (xs: any) => xs.length === 0;
    const take = (n: any) => (xs: any) => xs.slice(0, n);
    const drop = (n: any) => (xs: any) => xs.slice(n);
    const reverse = (xs: any) => xs.slice(0).reverse();
    const comp = (f: any) => (g: any) => (x: any) => f(g(x));
    const not = (x: any) => !x;
    const chunk = (n: any): any => (xs: any): any =>
      isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

    let makeGroup = ([ones, tens, huns]: any) =>
    {
      return [
        num(huns) === 0 ? '' : a[huns] + ' Hundred ',
        num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
        a[tens + ones] || a[ones]
      ].join('');
    };

    let thousand = (group: any, i: any) => group === '' ? group : `${group} ${g[i]}`;

    if (typeof n === 'number')
      return this.inWords(str(n));
    else if (n === '0')
      return 'Zero';
    else
      return comp(chunk(3))(reverse)(arr(n))
        .map(makeGroup)
        .map(thousand)
        .filter(comp(not)(isEmpty))
        .reverse()
        .join(' ');
  }
}
