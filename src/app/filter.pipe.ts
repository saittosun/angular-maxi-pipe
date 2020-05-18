import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // tslint:disable-next-line:max-line-length
  // The reason simply is that the pipe now gets recalculated whenever data changes and as mentioned before, this can lead to performance issues but might be what you're interested in. So it is fine to use it, this is what is pure property is therefore, you can set it to false which basically means this is not, you could say purely focusing on whether the pipe arguments changed but now it will also be recalculated whenever anything changes on the page and again this might be a bad behavior, I'm just emphasizing this because it's so important to understand but if you know what you're doing, if you do need this behavior, definitely go ahead, set pure to false and you are good to go. And with that, we now get a working filter pipe with this little downside of potentially hitting performance issues if we have a very long list here.
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
