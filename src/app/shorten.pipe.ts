import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {
    // tslint:disable-next-line:max-line-length
    // this would be to return and this is important, transform always needs to return something because a pipe is just you put something in, you get something out, so you need to get something out otherwise it won't work.
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}
