import { NumberToWordsPipe } from './number-to-words.pipe';

describe('NumberToWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
