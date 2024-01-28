import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator',
  standalone: true
})
export class SeparatorPipe implements PipeTransform {
  transform(cardId: string): string {
    let res="";
    for (let index = 0; index < cardId.length; index+=4) {
       res+= cardId.substring(index, index+4);
       if(index!=cardId.length-4)
       res+="-";
    }
    return res;
    // return cardId.substring(0, 4) + "-" + cardId.substring(4, 8) + "-" + cardId.substring(8, 12) + "-" + cardId.substring(12, 16);
  }
}
